import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffe & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
];

function Categories(props) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator="fasle">
        {/*loop starts here */}
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
                source={item.image}
              ></Image>

              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "900",
                }}
              >
                {item.text}
              </Text>
            </View>
          );
        })}

        {/*loop ends here */}
      </ScrollView>
    </View>
  );
}

export default Categories;
