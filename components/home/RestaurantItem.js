import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restuarant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restuarant.name,
              image: restuarant.image_url,
              price: restuarant.price,
              reviews: restuarant.review_count,
              rating: restuarant.rating,
              categories: restuarant.categories,
            })
          }
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            {/*Image */}
            <RestuarantImage image={restuarant.image_url} />
            {/*Info */}
            <RestuarantInfo rating={restuarant.rating} name={restuarant.name} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestuarantImage = (props) => (
  <>
    <View>
      <ImageBackground
        source={{
          uri: `${props.image}`,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="heart-outline"
            size={24}
            color={"#fff"}
            style={{
              position: "absolute",
              right: 20,
              top: 20,
            }}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  </>
);

const RestuarantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {props.name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "grey",
        }}
      >
        30-45 min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {props.rating}
      </Text>
    </View>
  </View>
);

export default RestaurantItems;
