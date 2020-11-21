import React, { useEffect, useState } from "react";
import { PageDefault, SpaceBetween, SafeArea } from "../../components/Views";
import HeaderMenu from "../../components/HeaderMenu";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
import ContainerInfo from "../../components/ContainerInfo";

const background_card = require("../../assets/img/project_card_background.png");
import firebase from "firebase";

const ListProjects = () => {
  useEffect(() => {
    (async () => {
      await getDataProjects();
    })();
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  async function getDataProjects() {
    let dataProjects = [];
    let data = [];

    await firebase
      .database()
      .ref("/tbl_projetos")
      .once("value", async (snapshot) => {
        snapshot.forEach((child) => {
          dataProjects.push(child);
        });
      });
    dataProjects.forEach(function (project, index) {
      data.push({
        ...project.val(),
        key: `${index}`,
      });
    });
    setDataProjects(data);
    setLoading(false);
    setVisible(true);
  }

  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [dataProjects, setDataProjects] = useState(null);

  return (
    <PageDefault style={{ paddingTop: 75 }}>
      <HeaderMenu viewBack={true} />
      <ContainerInfo />
      <TitleApp title="Lista de Projetos" />
      <SafeArea>
        {visible && (
          <FlatList
            data={dataProjects}
            keyExtractor={(project) => project.key}
            renderItem={(project) => (
              <View style={styles.container}>
                <Image source={background_card} style={styles.image} />
                <Text style={styles.titleProject}>
                  {project.item.nomeprojeto}
                </Text>
                <SpaceBetween>
                  <Text style={styles.description}>
                    {project.item.resumoprojeto}
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
            )}
          />
        )}
      </SafeArea>
    </PageDefault>
  );
};

export default ListProjects;
