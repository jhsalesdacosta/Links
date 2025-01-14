import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  Linking,
} from "react-native";
import { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/Styles/colors";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { categories } from "@/utils/categories";
import { LinkStorage, linkStorage } from "@/storage/link-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

  async function getLinks() {
    try {
      const response = await linkStorage.get();

      const filtered = response.filter((link) => link.category === category);

      setLinks(filtered);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel listar os links");
    }
  }

  async function handleOpen() {
    try {
      await Linking.openURL(link.url);
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel abrir o link");
    }
  }

  async function linkRemove() {
    try {
      await linkStorage.remove(link.id);
      getLinks();
      setShowModal(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel excluir o link");
      console.log(error);
    }
  }

  function hanDleRemove() {
    Alert.alert("Excluir", "Deseja realmente excluir o link?", [
      { text: "Sim", onPress: linkRemove },
      { style: "cancel", text: "Não" },
    ]);
  }

    function handleDetails(selected: LinkStorage) {
      setShowModal(true);
      setLink(selected);
    }

    useFocusEffect(
      useCallback(() => {
        getLinks();
      }, [category])
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => router.navigate("/add")}
          >
            <MaterialIcons name="add" size={32} color={colors.green[300]} />
          </TouchableOpacity>
        </View>

        <Categories onChange={setCategory} selected={category} />

        <FlatList
          data={links}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              name={item.name}
              url={item.url}
              onDetails={() => handleDetails(item)}
            />
          )}
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          showsVerticalScrollIndicator={false}
        />
        <Modal transparent visible={showModal} animationType="slide">
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalCategory}>{link.category}</Text>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <MaterialIcons
                    name="close"
                    size={20}
                    color={colors.gray[400]}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.modalLinkName}>{link.name}</Text>
              <Text style={styles.modalUrl}>{link.url}</Text>

              <View style={styles.modalFooter}>
                <Option name="abrir" icon="language" onPress={handleOpen} />
                <Option
                  name="excluir"
                  icon="delete"
                  variant="secondary"
                  onPress={hanDleRemove}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

