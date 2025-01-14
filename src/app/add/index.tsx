import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./style";
import { colors } from "@/Styles/colors";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    try {
      if (!category) {
        return Alert.alert("Categoria", "Selecione uma categoria");
      }
      if (!name.trim()) {
        return Alert.alert("Nome", "Digite um nome");
      }
      if (!url.trim()) {
        return Alert.alert("URL", "Adicione uma URL");
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });

      Alert.alert("Sucesso", "Link salvo com sucesso", [
        { text: "voltar", onPress: () => router.back() },
        { text: "continuar"},
      ]);

    } catch (error) {
      Alert.alert("Erro", "Não foi possivel salvar o link");
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories onChange={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} />

        <Input placeholder="URL" onChangeText={setUrl} autoCapitalize="none" />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
