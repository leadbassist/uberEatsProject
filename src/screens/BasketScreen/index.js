import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
  // const [quantity, setQuantity] = useState(1);

  const { restaurant, basketDishes, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();

  const onCreateOrder = async () => {
    const newOrder = await createOrder();
    navigation.navigate("OrdersTab", {
      screen: "Order",
      params: { id: newOrder.id },
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>
      <Text style={styles.yourItems}>Your items</Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <Pressable onPress={onCreateOrder} style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226; ${totalPrice.toFixed(2)}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,

    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto", // will move to bottom, maximizing the margin on top.
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  yourItems: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 19,
  },
});

export default BasketScreen;
