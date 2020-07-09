import React from "react";

// Native
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Shared
import { color } from "~/shared/color";

const BackButton = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handleNavigateBack}>
      <Icon name="arrow-left" size={20} color={color.primary} />
    </TouchableOpacity>
  );
};

export default BackButton;
