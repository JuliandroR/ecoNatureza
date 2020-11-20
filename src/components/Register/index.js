import React from "react";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import {
  Container,
  ImageRegister,
  ContainerInfos,
  Title,
  TitleTopic,
  ScientificName,
  ContainerButtons,
  ButtonDrop,
  NumberDrop,
} from "./styles";

import { TouchableOpacity } from "react-native";

const Register = (props) => {
  return (
    <Container key={props.key}>
      <ImageRegister source={{ uri: props.source }} />
      <ContainerInfos>
        <Title>{props.title}</Title>

        <TitleTopic>Nome Cietífico</TitleTopic>
        <ScientificName>{props.scientificName}</ScientificName>

        <ContainerButtons>
          <ButtonDrop onPress={props.dropFunction}>
            <SimpleLineIcons name="drop" size={25} color="#885500" />
            <NumberDrop>{props.numberLikes}</NumberDrop>
          </ButtonDrop>

          <TouchableOpacity onPress={props.viewFunction}>
            <Feather name="arrow-right-circle" size={30} color="#885500" />
          </TouchableOpacity>
        </ContainerButtons>
      </ContainerInfos>
    </Container>
  );
};

export default Register;
