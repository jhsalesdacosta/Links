import { Pressable, PressableProps, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/Styles/colors"
import { styles } from "./styles"

type Props = PressableProps & {
    name: string
    icon: keyof typeof MaterialIcons.glyphMap
    isSelected: boolean
  }

export function Category({ name, icon, isSelected,...rest }: Props) {
   const color = isSelected ? colors.green[300] : colors.gray[400]
    return (
        <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, {color}]}>{name}</Text>
        </Pressable>

    )

}