import React from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import TitleApp from "../../components/TitleApp";
import ContainerInfo from "../../components/ContainerInfo";

const default_image = require("../../assets/background_image.jpg");

const ListSpecies = () => {
  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Lista de Espécies" />
      <SafeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scroll}>
            <View style={styles.cardSpecie}>
              <Image source={default_image} style={styles.imageSpecie} />
              <Text style={styles.popularName}>Lorem Ipsum</Text>
              <Text style={styles.scientificName}>Lorem Ipsum</Text>
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Entypo
                  name="arrow-with-circle-right"
                  size={30}
                  color="#885500"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cardSpecie}>
              <Image source={default_image} style={styles.imageSpecie} />
              <Text style={styles.popularName}>Lorem Ipsum</Text>
              <Text style={styles.scientificName}>Lorem Ipsum</Text>
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Entypo
                  name="arrow-with-circle-right"
                  size={30}
                  color="#885500"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cardSpecie}>
              <Image source={default_image} style={styles.imageSpecie} />
              <Text style={styles.popularName}>Lorem Ipsum</Text>
              <Text style={styles.scientificName}>Lorem Ipsum</Text>
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Entypo
                  name="arrow-with-circle-right"
                  size={30}
                  color="#885500"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeArea>
    </PageDefault>
  );
};

export default ListSpecies;
