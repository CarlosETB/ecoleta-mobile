// Native
import { StyleSheet } from "react-native";

// Shared
import { color } from "~/shared/color";

const styles: any = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    backgroundColor: color.transparent,
  },
  headerLeftContainerStyle: {
    paddingHorizontal: 32,
  },
  cardStyle: {
    backgroundColor: color.secondary,
  },
});

export default styles;
