import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
  },
});

export default OrderScreen;