import React from "react";
import { PageDefault, ImageBackground } from "../../components/Views";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import NumberInfo from "../../components/NumberInfo";

const explore_background = require("../../assets/img/explore_background.png");
const logo_image = require("../../assets/img/logo.png");
const projects_background = require("../../assets/img/project_background.png");
const especies_background = require("../../assets/img/especies_background.png");
const comunidade_background = require("../../assets/img/comunidade_background.png");

const Explore = () => {
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <View style={styles.containerHeader}>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo_image} />
            <Text style={styles.titleApp}>Eco Cerrado</Text>
            <TouchableOpacity onPress={() => {}}>
              <Entypo name="menu" size={40} color="#885500" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <NumberInfo title="registros" value="99" />
            <NumberInfo title="espécies" value="99" />
            <NumberInfo title="colaboradores" value="99" />
            <NumberInfo title="projetos" value="99" />
          </View>
        </View>
        
        <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
          <ImageBackground
            style={styles.imageButton}
            source={projects_background}
          >
            <Text style={styles.textButton}>Projetos</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
          <ImageBackground
            style={styles.imageButton}
            source={especies_background}
          >
            <Text style={styles.textButton}>Espécies</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.buttonOption}>
          <ImageBackground
            style={styles.imageButton}
            source={comunidade_background}
          >
            <Text style={styles.textButton}>Comunidade</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Explore;
