import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import OrderLiveUpdates from "../screens/OrderLiveUpdates";

const Tab = createMaterialTopTabNavigator();

const OrderDetailsNavigator = ({ route }) => {
  const id = route?.params?.id;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Details">
        {() => <OrderDetailsScreen id={id} />}
      </Tab.Screen>
      <Tab.Screen name="Updates">
        {() => <OrderLiveUpdates id={id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default OrderDetailsNavigator;
