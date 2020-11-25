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
  SafeArea,
} from "../../components/Views";
import { AntDesign, SimpleLineIcons, Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import {
  ContainerButtons,
  ButtonDrop,
  NumberDrop,
} from "../../components/Register/styles";
import HeaderBack from "../../components/HeaderBack";

const explore_background = require("../../assets/img/explore_background.png");

const default_register_image = require("../../assets/background_image_2.jpg");

const ViewRegister = ({ navigation, route }) => {
  const data = route.params?.data;
  // console.warn(data);
  return (
    <PageDefault>
      <ImageBackground source={explore_background}>
        <HeaderBack title="" />

        <SafeArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Image
                source={{uri: data.image_url}}
                style={styles.image}
                resizeMode="contain"
              />

              <Text style={styles.title}>{data.specieName}</Text>
              <Text style={styles.scientificName}>{data.scientificName}</Text>

              <View style={styles.container}>
                <Text style={styles.topicTitle}>Descrição da Observação</Text>
                <Text style={styles.text}>{data.descricao}</Text>
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
                      latitude: data.location.latitude,
                      longitude: data.location.longitude,
                    }}
                    title={data.specieName}
                    description={data.scientificName}
                  />
                </MapView>
              </View>

              <ContainerButtons style={styles.viewButtons}>
                <ButtonDrop onPress={() => {}}>
                  <SimpleLineIcons name="drop" size={40} color="#885500" />
                  <NumberDrop style={styles.numberLike}>{data.likes}</NumberDrop>
                </ButtonDrop>

                <TouchableOpacity onPress={() => {}}>
                  <Feather name="share-2" size={40} color="#885500" />
                </TouchableOpacity>
              </ContainerButtons>
            </View>
          </ScrollView>
        </SafeArea>
      </ImageBackground>
    </PageDefault>
  );
};

export default ViewRegister;
