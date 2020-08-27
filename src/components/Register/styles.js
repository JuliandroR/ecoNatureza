import styled from "styled-components/native";

export const Container = styled.View`
  width: 350;
  height: 150;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10;
  border-color: #885500;
  border-width: 2;
  overflow: visible;
  margin-top: 110;
  margin-bottom: 30;
`;

export const ImageRegister = styled.Image`
  width: 150;
  height: 250;
  position: absolute;
  bottom: -2;
  left: -2;
  border-radius: 10;
`;

export const ContainerInfos = styled.View`
  margin-left: 170;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 10;
`;

export const Title = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 18;
  color: #885500;
  margin-bottom: 10;
`;

export const TitleTopic = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 12;
  color: #b0ac3a;
`;

export const ScientificName = styled.Text`
  text-align: left;
  font-weight: 500;
  font-size: 14;
  color: #885500;
  margin-bottom: 10;
`;

export const ContainerButtons = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const ButtonDrop = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const NumberDrop = styled.Text`
  font-size: 14;
  font-weight: 400;
  color: #885500;
`;
