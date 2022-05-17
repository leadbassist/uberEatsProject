import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import OrderListItem from "../../components/OrderListItem";
import { useOrderContext } from "../../contexts/OrderContext";

const OrderScreen = () => {
  const { orders } = useOrderContext();
  // console.log(orders);

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
  },
});

export default OrderScreen;
