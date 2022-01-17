import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
// import LottieView from "lottie-react-native";

function OrderCompleted(props) {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Green checkmark animation */}
      <View>
        <Text>
          ORDER from {restaurantName} COMPLETED TOTAL PRICE OF: {totalUSD}
        </Text>
      </View>
      {/* menu items */}

      {/* cooking animation */}
    </SafeAreaView>
  );
}

export default OrderCompleted;
