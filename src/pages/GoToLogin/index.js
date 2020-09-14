import React from 'react';
import { PageDefault } from '../../components/Views';
import { Button } from '../../components/Buttons';

const GoToLogin = ({navigation}) => {
  return (
      <PageDefault>
          <Button onPress={() => {navigation.navigate("Login")}} text="Fazer Login" color="#885500" />
      </PageDefault>
  );
}

export default GoToLogin;