import { View, Text, StyleSheet } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.itemName}>{basketDish.name}</Text>
      <Text style={styles.itemTotal}>${basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10, // added by me when doing OrderDetailsScreen lecture
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 2,
  },
  itemTotal: {
    marginLeft: "auto", // moves far right, maximizing margin on the left.
  },
  itemName: {
    fontWeight: "600",
  },
});

export default BasketDishItem;
