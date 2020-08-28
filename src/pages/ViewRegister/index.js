import React from "react";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from "react-native";
import {
  PageDefault,
  ImageBackground,
  SpaceBetween,
} from "../../components/Views";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import {
  ContainerButtons,
  ButtonDrop,
  NumberDrop,
} from "../../components/Register/styles";

const explore_background = require("../../assets/img/explore_background.png");

const default_register_image = require("../../assets/background_image_2.jpg");

const ViewRegister = ({ navigation, route }) => {
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <SpaceBetween>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={35} color="#885500" />
          </TouchableOpacity>
        </SpaceBetween>

        <SafeAreaView style={styles.scroll}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Image
                source={route.params?.image}
                style={styles.image}
                resizeMode="contain"
              />

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
                <MapView
                  style={styles.mapStyle}
                  loadingEnabled={true}
                  region={{
                    latitude: -20.4516434,
                    longitude: -54.6576368,
                    latitudeDelta: 8,
                    longitudeDelta: 8,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: -22.1484908,
                      longitude: -53.4656069,
                    }}
                    title="Árvore Bonitinha"
                    description="Uma simples árvore"
                  />
                </MapView>
              </View>

              <ContainerButtons style={styles.viewButtons}>
                <ButtonDrop onPress={() => {}}>
                  <SimpleLineIcons name="drop" size={40} color="#885500" />
                  <NumberDrop style={styles.numberLike}>99</NumberDrop>
                </ButtonDrop>

                <TouchableOpacity onPress={() => {}}>
                  <Feather name="share-2" size={40} color="#885500" />
                </TouchableOpacity>
              </ContainerButtons>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </PageDefault>
  );
};

export default ViewRegister;
