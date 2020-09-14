import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 24px;
  color: #885500;
  font-weight: bold;
`;

const TitleApp = (props) => {
  return <Title style={props.style}>{props.title}</Title>;
};

export default TitleApp;
