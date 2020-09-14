import styled from "styled-components/native";

export const Container = styled.View`
  width: 350px;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border-color: #885500;
  border-width: 2px;
  overflow: visible;
  margin-top: 110px;
  margin-bottom: 30px;
`;

export const ImageRegister = styled.Image`
  width: 150px;
  height: 250px;
  position: absolute;
  bottom: -2px;
  left: -2px;
  border-radius: 10px;
`;

export const ContainerInfos = styled.View`
  margin-left: 170px;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 10px;
`;

export const Title = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: #885500;
  margin-bottom: 10px;
`;

export const TitleTopic = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #b0ac3a;
`;

export const ScientificName = styled.Text`
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: #885500;
  margin-bottom: 10px;
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
  font-size: 14px;
  font-weight: 400;
  color: #885500;
`;
