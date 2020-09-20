import React from "react";
import {
  PageDefault,
  ImageBackground,
  SafeArea,
  SpaceBetween,
} from "../../components/Views";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import NumberInfo from "../../components/NumberInfo";
import TitleApp from "../../components/TitleApp";
import HeaderMenu from "../../components/HeaderMenu";

const explore_background = require("../../assets/img/explore_background.png");
const logo_image = require("../../assets/img/logo.png");
const projects_background = require("../../assets/img/project_background.png");
const especies_background = require("../../assets/img/especies_background.png");
const comunidade_background = require("../../assets/img/comunidade_background.png");

const Explore = ({ navigation }) => {
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <View style={styles.containerHeader}>
          <HeaderMenu />

          <SpaceBetween>
            <NumberInfo title="registros" value="99" />
            <NumberInfo title="espécies" value="99" />
            <NumberInfo title="colaboradores" value="99" />
            <NumberInfo title="projetos" value="99" />
          </SpaceBetween>
        </View>

        <SafeArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("ListProjects")
            }} style={styles.buttonOption}>
              <ImageBackground
                style={styles.imageButton}
                source={projects_background}
              >
                <Text style={styles.textButton}>Projetos</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate("ListSpecies")
            }} style={styles.buttonOption}>
              <ImageBackground
                style={styles.imageButton}
                source={especies_background}
              >
                <Text style={styles.textButton}>Espécies</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
              navigation.navigate("ListCommunity")
            }} style={styles.buttonOption}>
              <ImageBackground
                style={styles.imageButton}
                source={comunidade_background}
              >
                <Text style={styles.textButton}>Comunidade</Text>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </SafeArea>
      </ImageBackground>
    </PageDefault>
  );
};

export default Explore;
