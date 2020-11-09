import React from "react";
import { useNavigation } from "@react-navigation/native";

const access_background = require("../../assets/img/access_background.png");
import {
  PageDefault,
  ImageBackground,
  ContainerOpacity,
} from "../../components/Views";
import Logo from "../../components/Logo";
import { Button, FlatButton } from "../../components/Buttons";
import { View, StyleSheet, PixelRatio } from "react-native";

const styles = StyleSheet.create({
  ContainerOpacity: {
    marginTop: PixelRatio.getPixelSizeForLayoutSize(20)
  },
})

const Access = () => {
  const navigation = useNavigation();
  return (
    <PageDefault>
      <ImageBackground source={access_background}>
        <Logo size={100} />
        <ContainerOpacity style={styles.ContainerOpacity}>
          <View>
            <Button
              color={"#885500"}
              onPress={() => {
                navigation.navigate("Login");
              }}
              text={"Entrar"}
            />
            <Button color={"#B0AC3A"} onPress={() => {
              navigation.navigate("Explore");
            }} text={"Explorar"} />
          </View>
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
