import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } •  ${rating} ⭐  • (${reviews}+)`;

  return (
    <View>
      <RestauarantImage image={image} />
      <RestauarantName name={name} />
      <RestauarantDescription description={description} />
    </View>
  );
}

const RestauarantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    ></Image>
  );
};

const RestauarantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};

const RestauarantDescription = (props) => {
  return (
    <View>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontSize: 15,
          fontWeight: "400",
          marginBottom: 10,
        }}
      >
        {props.description}
      </Text>
    </View>
  );
};

export default About;
