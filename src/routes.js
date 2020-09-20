import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Access from "./pages/Access";
import Login from "./pages/Login";
import Logon from "./pages/Logon";
import Profile from "./pages/Profile";
import ViewRegister from "./pages/ViewRegister";
import ViewMap from "./pages/ViewMap";
import NewRegister from "./pages/NewRegister";

import ExploreTabs from "./Navigations/ExploreTabs";
import ProfileTabs from "./Navigations/ProfileTabs";
import ListSpecies from "./pages/ListSpecies";
import ListProjects from "./pages/ListProjects";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Access" component={Access} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Logon" component={Logon} />
        <AppStack.Screen name="Explore" component={ExploreTabs} />
        <AppStack.Screen name="Profile" component={ProfileTabs} />
        <AppStack.Screen name="ViewRegister" component={ViewRegister} />
        <AppStack.Screen name="MapView" component={ViewMap} />
        <AppStack.Screen name="NewRegister" component={NewRegister} />
        <AppStack.Screen name="ListSpecies" component={ListSpecies} />
        <AppStack.Screen name="ListProjects" component={ListProjects} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
