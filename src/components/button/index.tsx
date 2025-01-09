import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type Props = TouchableOpacityProps &{
    title:string
}


export function Button({title, ...rest}:Props) {
return(
<TouchableOpacity style={style.contanier} {...rest}>
    
<Text style={style.title}>{title}</Text>

</TouchableOpacity>
)
}