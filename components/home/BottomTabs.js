import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function BottomTabs(props) {
  return (
    <View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 2.5,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Icon icon="home" text="Home" />
        <Icon icon="shopping-bag" text="Bag" />
        <Icon icon="search" text="Browse" />
        <Icon icon="book" text="Orders" />
        <Icon icon="user" text="Account" />
      </View>
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome
          name={props.icon}
          size={30}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        ></FontAwesome>
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BottomTabs;
