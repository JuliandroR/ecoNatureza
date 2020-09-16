import React from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import NumberInfo from "../../components/NumberInfo";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

const default_image = require("../../assets/background_image.jpg");

const ListSpecies = () => {
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
