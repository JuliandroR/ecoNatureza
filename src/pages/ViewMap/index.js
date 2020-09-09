import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { PageDefault } from "../../components/Views";
import { styles } from "./styles";

// import { Container } from './styles';
const default_register_image_2 = require("../../assets/background_image_2.jpg");
const marker = [
  {
    lat: -22.2610124,
    long: -53.3617453,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum",
  },
  {
    lat: -20.4516434,
    long: -54.6576368,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum",
  },
  {
    lat: -20.4577711,
    long: -54.6567826,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum",
  },
];

const ViewMap = () => {
  const navigation = useNavigation();
  return (
    <PageDefault>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: -20.4516434,
          longitude: -54.6576368,
          latitudeDelta: 8,
          longitudeDelta: 8,
        }}
      >
        {marker.map((item) => (
          <Marker
            coordinate={{
              latitude: item.lat,
              longitude: item.long,
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ViewRegister", {
                    image: default_register_image,
                  });
                }}
              >
                <MaterialCommunityIcons name="tree" size={50} color="#B0AC3A" />
              </TouchableOpacity>
            </View>
          </Marker>
        ))}
      </MapView>
    </PageDefault>
  );
};

export default ViewMap;
