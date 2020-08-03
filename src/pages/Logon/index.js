import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const logon_background = require("../../assets/img/logon_background.png");
const options = [
  { label: "Sim", value: "sim" },
  { label: "Não", value: "não" },
];

import {
  PageDefault,
  ImageBackground,
  ContainerOpacity,
} from "../../components/Views";
import { BackButton, Button } from "../../components/Buttons";
import Input from "../../components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DataPicker } from "../../components/DataPicker";
import Select from "../../components/Select";

const Logon = () => {
  const navigation = useNavigation();
  const [bornDate, setBornDate] = useState("");
  return (
    <PageDefault>
      <ImageBackground source={logon_background}>
        <ContainerOpacity>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
            name={"ios-arrow-back"}
          />
          <Input
            value={""}
            onChange={() => {}}
            placeholder={"Digite seu Nome"}
            isPassword={false}
          />

          <DataPicker
            onChange={(value) => {
              setBornDate(value);
            }}
            value={bornDate}
          />

          <Select placeholder={"Aluno do IFMS?"} options={options} />

          <Input
            value={""}
            onChage={() => {}}
            placeholder={"Digite seu e-mail"}
            isPassword={false}
          />

          <Input
            value={""}
            onChage={() => {}}
            placeholder={"Digite sua senha"}
            isPassword={true}
          />

          <Button onPress={() => {}} color={"#885500"} text="Entrar" />
        </ContainerOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Logon;
