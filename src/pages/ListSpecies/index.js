import React, { useEffect, useState } from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import TitleApp from "../../components/TitleApp";
import ContainerInfo from "../../components/ContainerInfo";

import firebase from "firebase";

const ListSpecies = () => {
  useEffect(() => {
    (async () => {
      await getDataSpecies();
    })();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  async function getDataSpecies() {
    let dataSpecies = [];
    let data = [];

    await firebase
      .database()
      .ref("/tbl_especies")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataSpecies.push(child);
        });
      });
    dataSpecies.forEach(function (specie, index) {
      data.push({
        ...specie.val(),
        key: `${index}`,
      });
    });
    setDataSpecies(data);
    setLoading(false);
    setVisible(true);
  }

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [dataSpecies, setDataSpecies] = useState(null);

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Lista de Espécies" />
      <SafeArea>
            {visible && (
              <FlatList
                data={dataSpecies}
                keyExtractor={(specie) => specie.key}
                renderItem={(specie) => (
                  <View style={styles.cardSpecie}>
                    <Text style={styles.popularName}>{specie.item.speciesname}</Text>
                    <Text style={styles.scientificName}>{specie.item.scientificname}</Text>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                      <Entypo
                        name="arrow-with-circle-right"
                        size={30}
                        color="#885500"
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            )}
      </SafeArea>
    </PageDefault>
  );
};

export default ListSpecies;
