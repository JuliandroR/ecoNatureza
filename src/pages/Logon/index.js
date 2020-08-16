import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

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
import { DataPicker } from "../../components/DataPicker";


const Logon = () => {
  const [student, setStudent] = useState();
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

          <CheckBox
            disabled={false}
            value={student}
            onValueChange={(newValue) => setStudent(newValue)}
          />

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
