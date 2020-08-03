import React from "react";
import { useNavigation } from "@react-navigation/native";

const access_background = require("../../assets/img/access_background.png");
import {
  PageDefault,
  ImageBackground,
  ContainerOpacity,
} from "../../components/Views";
import { Image, Text } from "react-native";
import Logo from "../../components/Logo";
import { Button, FlatButton } from "../../components/Buttons";

const Access = () => {
  const navigation = useNavigation();
  return (
    <PageDefault>
      <ImageBackground source={access_background}>
        <Logo size={200} />
        <ContainerOpacity>
          <Button
            color={"#885500"}
            onPress={() => {
              navigation.navigate("Login");
            }}
            text={"Entrar"}
          />
          <Button color={"#B0AC3A"} onPress={() => {}} text={"Explorar"} />
          <FlatButton
            onPress={() => {
              navigation.navigate("Logon");
            }}
            text={"Criar Novo Usuário"}
            cor={"#885500"}
          />
        </ContainerOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Access;
