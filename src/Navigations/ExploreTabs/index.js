import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Explore from "../../pages/Explore";
import ViewMap from "../../pages/ViewMap";

const ExploreTabStack = createBottomTabNavigator();

export default function ExploreTabs() {
  return (
    <ExploreTabStack.Navigator>
      <ExploreTabStack.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={24} color="#885500" />
          ),
        }}
      />

      <ExploreTabStack.Screen
        name="ViewMap"
        component={ViewMap}
        options={{
          tabBarLabel: "Mapa",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-search" size={24} color="#885500" />
          ),
        }}
      />
    </ExploreTabStack.Navigator>
  );
}
