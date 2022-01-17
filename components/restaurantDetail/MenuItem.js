import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Checkbox } from "react-native-paper";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce becahmel",
    price: "13.50$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian Dish",
    price: "23.50$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Falafel",
    description: "Pita with Falafel",
    price: "5.00$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Italian Pizza",
    description: "Original Italian pizza with toppings",
    price: "9.75$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce becahmel",
    price: "13.50$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian Dish",
    price: "23.50$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Falafel",
    description: "Pita with Falafel",
    price: "5.00$",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Italian Pizza",
    description: "Original Italian pizza with toppings",
    price: "9.75$",
    image: "https://picsum.photos/200/300",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ height: "70%" }}>
      {foods.map((food, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(isChecked: boolean) => {
                selectItem(food, isChecked);
              }}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
