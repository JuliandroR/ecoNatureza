import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styled from "styled-components/native";
import TitleApp from "../TitleApp";

const Container = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderMenu = () => {
  return (
    <Container>
      <TitleApp />
      <TouchableOpacity onPress={() => {}}>
        <Feather name="menu" size={40} color="#885500" />
      </TouchableOpacity>
    </Container>
  );
};

export default HeaderMenu;
