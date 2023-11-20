import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              //Crie condicional para alternar aparência

              return (
               // Retorne o ionicon
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "black",
            style: {
              
            },
            labelStyle: {
             
            },
            labelPosition: " ",
            tabStyle:{
            
            }           
          }}
        >
          <Tab.Screen name="Transação" component={TransactionScreen} />
          <Tab.Screen name="Pesquisar" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
