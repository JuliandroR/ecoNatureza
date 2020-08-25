import React from "react";
import { View, Image, Text } from "react-native";

import { PageDefault, ImageBackground } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";

import { styles } from "./styles";

const explore_background = require("../../assets/img/explore_background.png");
const default_profile_photo = require("../../assets/default_profile_photo.png");

const Profile = () => {
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderMenu />

        <View style={styles.spaceBetween}>
          <Image source={default_profile_photo} style={styles.profilePhoto} />
          <NumberInfo title="registros" value="99" />
          <NumberInfo title="curtidas" value="99" />
        </View>

        <View style={styles.spaceBetween}>
            <Text style={styles.profileName}>Juliandro R. Ribeiro</Text>
        </View>

        <View style={styles.listRegisters} />

      </ImageBackground>
    </PageDefault>
  );
};

export default Profile;
