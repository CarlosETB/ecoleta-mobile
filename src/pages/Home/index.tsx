import React, { useState, useEffect } from 'react'

// Native
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Picker,
  KeyboardAvoidingView
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import axios from 'axios'

//Shared
import { Container } from '~/shared/styles'
import * as Img from '~/shared/images'

// Private
import { Dropdown } from './styles'

interface IBGEUFResponse {
  sigla: string
}

interface IBGECityResponse {
  nome: string
}

const Home = () => {
  const [uf, setUf] = useState<string[]>([])
  const [city, setCity] = useState<string[]>([])
  const [ufList, setUfList] = useState<string[]>([])
  const [cityList, setCityList] = useState<string[]>([])
  const [selectedUF, setSelectedUF] = useState('0')
  const [selectedCity, setSelectedCity] = useState('0')

  const navigation = useNavigation()

  let title = 'Seu marketplace de coleta de resíduos'
  let description =
    'Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.'

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then(response => {
        const uFInitials = response.data.map(uf => uf.sigla)

        setUfList(uFInitials)
      })
  }, [])

  useEffect(() => {
    if (selectedUF === '0') {
      return
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`
      )
      .then(response => {
        const cityNames = response.data.map(city => city.nome)

        setCityList(cityNames)
      })
  }, [selectedUF])

  function handleNavigateToPoints() {
    navigation.navigate('Points', { uf, city })
  }

  async function handleSelectedUF(itemValue: any) {
    if (itemValue === 0) {
      return
    }
    setUf(itemValue)
    setSelectedUF(itemValue)
  }

  async function handleSelectedCity(itemValue: any) {
    setCity(itemValue)
    setSelectedCity(itemValue)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container source={Img.HomeBackground}>
        <View style={styles.main}>
          <Image source={Img.Logo} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.inputView}>
            <Picker
              style={styles.input}
              selectedValue={selectedUF}
              onValueChange={handleSelectedUF}>
              <Picker.Item value={0} label="Selecione uma UF" />
              {ufList.map(ufs => (
                <Picker.Item
                  key={String(ufs)}
                  value={ufs}
                  label={String(ufs)}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.inputView}>
            <Picker
              style={styles.input}
              selectedValue={selectedCity}
              onValueChange={handleSelectedCity}>
              <Picker.Item value="0" label="Selecione uma cidade" />
              {cityList.map(cities => (
                <Picker.Item
                  value={cities}
                  key={String(cities)}
                  label={String(cities)}
                />
              ))}
            </Picker>
          </View>

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#fff" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </Container>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24
  },

  footer: {},

  select: {},

  inputView: {
    borderRadius: 15,
    backgroundColor: '#FFF',
    marginBottom: 8
  },

  input: {
    height: 60,
    paddingHorizontal: 24,
    fontSize: 16
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8
  },

  buttonIcon: {
    height: 60,
    width: 60,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16
  }
})

export default Home
