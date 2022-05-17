import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Order", {
      id: order.id,
    });
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

        <View>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
          <Text style={styles.restaurantItems}>3 items &#8226; $38.45</Text>
          <Text>2 days ago &#8226; {order.status}</Text>
        </View>
      </View>
      <View style={styles.separator} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 7,
  },
  restaurantName: {
    fontWeight: "600",
    fontSize: 16,
  },
  restaurantItems: {
    marginVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    margin: 10,
  },
});

export default OrderListItem;
