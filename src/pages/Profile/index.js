import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import {
  PageDefault,
  ImageBackground,
  SpaceBetween,
} from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";
import Register from "../../components/Register";

const explore_background = require("../../assets/img/explore_background.png");

const default_profile_photo = require("../../assets/default_profile_photo.png");
const default_register_image = require("../../assets/background_image.jpg");
const default_register_image_2 = require("../../assets/background_image_2.jpg");
const default_register_image_3 = require("../../assets/background_image_3.jpg");

const Profile = () => {
  const navigation = useNavigation();
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderMenu />

        <SpaceBetween>
          <Image source={default_profile_photo} style={styles.profilePhoto} />
          <NumberInfo title="registros" value="99" />
          <NumberInfo title="curtidas" value="99" />
        </SpaceBetween>

        <SpaceBetween>
          <Text style={styles.profileName}>Juliandro R. Ribeiro</Text>
        </SpaceBetween>

        <SafeAreaView style={styles.listRegisters}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Register
              source={default_register_image}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {image: default_register_image})
              }}
            />

            <Register
              source={default_register_image_2}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {image: default_register_image_2})
              }}
            />

            <Register
              source={default_register_image_3}
              title="Árvore Bonitinha"
              scientificName="Harbores Bhonitas"
              dropFunction={() => {}}
              numberLikes="99"
              viewFunction={() => {
                navigation.navigate("ViewRegister", {image: default_register_image_3})
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </PageDefault>
  );
};

export default Profile;
