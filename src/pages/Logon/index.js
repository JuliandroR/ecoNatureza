import React, { useState } from "react";
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
  SafeArea,
} from "../../components/Views";
import { BackButton, Button } from "../../components/Buttons";
import Input from "../../components/Input";
import { DataPicker } from "../../components/DataPicker";
import Checkbox from "../../components/Checkbox";
import { ScrollView } from "react-native";
import { signInMethod } from "../../data/Firebase";

const Logon = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [bornDate, setBornDate] = useState();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [student, setStudent] = useState(false);
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
          <SafeArea>
            <ScrollView>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e);
                }}
                placeholder={"Digite seu Nome"}
                isPassword={false}
              />

              <DataPicker
                onChange={(value) => {
                  setBornDate(value);
                }}
                value={bornDate}
                placeholder="Data de Nascimento"
              />

              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e);
                }}
                placeholder={"Digite seu e-mail"}
                isPassword={false}
              />

              <Input
                value={pass}
                onChange={(e) => {
                  setPass(e);
                }}
                placeholder={"Digite sua senha"}
                isPassword={true}
              />

              <Checkbox
                text="Aluno do IFMS?"
                value={student}
                onValueChange={setStudent}
              />

              <Button onPress={() => {
                signInMethod(navigation, name, bornDate, email, pass, student)
              }} color={"#885500"} text="Entrar" />
            </ScrollView>
          </SafeArea>
        </ContainerOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Logon;
