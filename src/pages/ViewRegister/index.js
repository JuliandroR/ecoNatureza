import React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  PageDefault,
  ImageBackground,
  SpaceBetween,
} from "../../components/Views";
import { styles } from "./styles";

const explore_background = require("../../assets/img/explore_background.png");

const default_register_image = require("../../assets/background_image.jpg");

const ViewRegister = () => {
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <SpaceBetween>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="arrowleft" size={35} color="#885500" />
          </TouchableOpacity>
        </SpaceBetween>

        <SafeAreaView style={styles.scroll}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Image source={default_register_image} style={styles.image} />

              <Text style={styles.title}>Árvore Bonitinha</Text>
              <Text style={styles.scientificName}>Harbores Bonhitas</Text>

              <View style={styles.container}>
                <Text style={styles.topicTitle}>Descrição da Observação</Text>
                <Text style={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  accusamus minus placeat, nesciunt officiis libero illo aperiam
                  voluptate et, nam magnam fugiat, cupiditate inventore dolore
                  culpa quisquam dolor reiciendis dolores?
                </Text>
              </View>

              <View style={styles.container}>
                  <Text style={styles.topicTitle}>Local do Registro</Text>
              </View>

            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </PageDefault>
  );
};

export default ViewRegister;
