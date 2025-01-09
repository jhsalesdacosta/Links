import { Text, View, Image, TouchableOpacity, FlatList, Modal } from "react-native"
import { styles } from "./styles"

import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/Styles/colors"
import { router } from "expo-router"


import { Categories } from "@/components/categories"
import { Link } from '@/components/link'
import { Option } from "@/components/option"
import { useState } from "react"
import { categories } from "@/utils/categories"

export default function Index() {
   const [category, setCategory] = useState(categories[0].name)
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
                <TouchableOpacity activeOpacity={0.2} onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category}/>



            <FlatList
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                keyExtractor={item => item}
                renderItem={() => (<Link
                    name='Rocketseat'
                    url='https://www.rocketseat.com.br/'
                    onDetails={() => console.log('Clicou!')}
                />)}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
            <Modal transparent visible={false}>

                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>Rocketseat</Text>
                        <Text style={styles.modalUrl}>https://www.rocketseat.com.br/</Text>
                        <View style={styles.modalfooter}>
                            <Option name="abrir" icon="language" />
                            <Option name="excluir" icon="delete" variant="secondary" />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}


