import { colors } from "@/Styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    contanier: {
        height: 52,
        width: '100%',
        backgroundColor: colors.green[300],
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.green[900],
        fontWeight: "600",
        fontSize: 16
    }
})