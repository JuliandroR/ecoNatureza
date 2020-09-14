import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import Explore from "../../pages/Explore";
import ViewMap from "../../pages/ViewMap";
import Profile from "../../pages/Profile";

const ProfileTabStack = createBottomTabNavigator();

export default function ProfileTabs() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={24} color="#885500" />
          ),
        }}
      />

      <ProfileTabStack.Screen
        name="ViewMap"
        component={ViewMap}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-search"
              size={24}
              color="#885500"
            />
          ),
        }}
      />

      <ProfileTabStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={24} color="#885500" />
          ),
        }}
      />
    </ProfileTabStack.Navigator>
  );
}
