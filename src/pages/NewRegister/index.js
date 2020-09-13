import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";

import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import HeaderBack from "../../components/HeaderBack";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { DataPicker } from "../../components/DataPicker";
import { Button } from "../../components/Buttons";

const default_register_image_2 = require("../../assets/background_image_2.jpg");
const options = [
  { label: "Lorem", value: "lorem" },
  { label: "Ipsum", value: "ipsum" },
];

const NewRegister = () => {
  const navigation = useNavigation();
  const [registerDate, setRegisterDate] = useState();

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderBack title="Novo Registro" />
      <SpaceBetween>
        <Image source={default_register_image_2} style={styles.image} />
        <TouchableOpacity onPress={() => {}}>
          <Entypo name="camera" size={30} color="#885500" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="md-photos" size={30} color="#885500" />
        </TouchableOpacity>
      </SpaceBetween>

      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Select placeholder="Selecione a espécie" options={options} />

          <DataPicker
            onChange={(value) => {
              setRegisterDate(value);
            }}
            value={registerDate}
            placeholder="Data do Registro"
          />

          <TouchableOpacity style={styles.location} onPress={() => {}}>
            <SpaceBetween>
              <FontAwesome name="map-marker" size={36} color="#885500" />
              <Text style={styles.text}>Localização</Text>
            </SpaceBetween>
          </TouchableOpacity>

          <Select placeholder="Vincular ao Projeto" options={options} />

          <TextArea
            placeholder="Digite as observações constatadas"
            value=""
            onChange={() => {}}
          />

          <Button onPress={() => {}} color="#885500" text="Cadastrar" />

        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default NewRegister;
