import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";
import { ActivityIndicator } from "react-native-paper";

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);

  const navigation = useNavigation();

  const route = useRoute();
  const id = route.params?.id;

  const { addDishToBasket } = useBasketContext();

  useEffect(() => {
    if (id) {
      DataStore.query(Dish, id).then(setDish);
    }
  }, [id]);

  const onAddToBasket = async () => {
    await addDishToBasket(dish, quantity);
    navigation.goBack();
  };

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

  if (!dish) {
    return <ActivityIndicator size={"large"} color="black" />;
  }

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
      <Pressable onPress={onAddToBasket} style={styles.button}>
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
