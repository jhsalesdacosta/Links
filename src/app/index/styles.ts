import {StyleSheet} from "react-native"
import {colors} from "@/Styles/colors"
import { Header } from "react-native/Libraries/NewAppScreen"


export const styles = StyleSheet.create({
    container:{
     flex: 1,
     paddingTop:62,
    },
 
     title: {
         color: colors.green[300],
         fontSize: 22,
     },
     header:{
        paddingHorizontal:24,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom: 32,

     },

     logo:{
        height:32,
        width: 38,
     }, 
    })
