import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import ViewCart from "../components/restaurantDetail/ViewCart";
function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route}></About>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2.5,
          marginBottom: 10,
        }}
      />
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}

export default RestaurantDetail;
