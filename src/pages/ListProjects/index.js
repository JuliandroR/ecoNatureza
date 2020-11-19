import React from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
import ContainerInfo from "../../components/ContainerInfo";

const background_card = require("../../assets/img/project_card_background.png");

const ListProjects = () => {
  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Lista de Projetos" />
      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image source={background_card} style={styles.image} />
            <Text style={styles.titleProject}>Lorem Ipsum</Text>
            <SpaceBetween>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                nostrum quos repudiandae, possimus necessitatibus animi.
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Entypo
                  name="arrow-with-circle-right"
                  size={40}
                  color="#885500"
                />
              </TouchableOpacity>
            </SpaceBetween>
          </View>

          <View style={styles.container}>
            <Image source={background_card} style={styles.image} />
            <Text style={styles.titleProject}>Lorem Ipsum</Text>
            <SpaceBetween>
              <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                nostrum quos repudiandae, possimus necessitatibus animi.
              </Text>
              <TouchableOpacity onPress={() => {}}>
                <Entypo
                  name="arrow-with-circle-right"
                  size={40}
                  color="#885500"
                />
              </TouchableOpacity>
            </SpaceBetween>
          </View>
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default ListProjects;
