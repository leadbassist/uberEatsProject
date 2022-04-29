import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";

const dish = restaurants[0].dishes[0]; // taking the first restaurant's first dish

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2); // will ensure the total is always within 2dp.
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />

      {/* the icons */}
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="minus-circle-outline"
          size={60}
          color="black"
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={60}
          color="black"
          onPress={onPlus}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Basket")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add {quantity} items to basket &#8226; ${getTotal()}
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
    fontSize: 30,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
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
});

export default DishDetailsScreen;
