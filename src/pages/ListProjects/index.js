import React from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";

const background_card = require("../../assets/img/project_card_background.png");

const ListProjects = () => {
  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu />
      <SpaceBetween>
        <NumberInfo title="registros" value="99" />
        <NumberInfo title="espécies" value="99" />
        <NumberInfo title="colaboradores" value="99" />
        <NumberInfo title="projetos" value="99" />
      </SpaceBetween>
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
