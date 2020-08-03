import React from "react";
import { useNavigation } from "@react-navigation/native";

const login_background = require("../../assets/img/login_background.png");

import {
  PageDefault,
  ImageBackground,
  ContainerOpacity,
} from "../../components/Views";
import Logo from "../../components/Logo";
import { BackButton, Button, FlatButton } from "../../components/Buttons";
import Input from "../../components/Input";

const Login = () => {
  const navigation = useNavigation();
  return (
    <PageDefault>
      <ImageBackground source={login_background}>
        <Logo size={125} />
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
            placeholder={"Digite seu E-mail"}
            isPassword={false}
          />

          <Input
            value={""}
            onChange={() => {}}
            placeholder={"Digite sua Senha"}
            isPassword={true}
          />

          <Button onPress={() => {}} color={"#885500"} text="Entrar" />

          <FlatButton
            onPress={() => {
              navigation.navigate("Logon");
            }}
            cor={"#885500"}
            text="Criar um novo usuário"
          />
        </ContainerOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Login;
