import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const PageDefault = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #f7f7f7;
`;

export const ImageBackground = styled.ImageBackground`
  padding-top: 75px;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerOpacity = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  padding-top: 50px;
  align-items: center;
  background-color: rgba(247, 247, 247, 0.5);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const SpaceBetween = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: 20;
`;
