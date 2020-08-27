import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Access from "./pages/Access";
import Login from "./pages/Login";
import Logon from "./pages/Logon";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import ViewRegister from "./pages/ViewRegister";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Access" component={Access} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Logon" component={Logon} />
        <AppStack.Screen name="Explore" component={Explore} />
        <AppStack.Screen name="Profile" component={Profile} />
        <AppStack.Screen name="ViewRegister" component={ViewRegister} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
