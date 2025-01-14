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
     links: {
      borderTopWidth: 1,
      borderTopColor: colors.gray[600]
    },
    linksContent: {
      gap: 20,
      padding: 20,
      paddingBottom: 100
    },
      modal: {
         flex: 1,
         justifyContent: "flex-end",
         
         
      },
      modalContent: {
         backgroundColor: colors.gray[900],
         borderTopColor: colors.gray[800],
         borderTopWidth:1,
         padding: 24,
         paddingBottom:42
      },
      modalHeader: {
         width: "100%",
         flexDirection: "row",
         marginBottom: 32,
         alignItems: "center"
      },
      modalCategory: {
         flex: 1,
         color: colors.gray[400],
         fontSize: 16,
         fontWeight:"500"
      },
      modalLinkName: {
         color: colors.gray[200],
         fontSize: 18,
         fontWeight: "600"
      },
      modalUrl: {
         color: colors.gray[400],
         fontSize: 14
      },
      modalFooter: {
         flexDirection: "row",
         marginTop: 32,
         width: "100%",
         justifyContent: "space-between",
         borderTopColor:colors.gray[600],
         borderTopWidth: 1,
         paddingVertical: 14
      }
    })
