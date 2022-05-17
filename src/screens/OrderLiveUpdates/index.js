import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Order, Transporter } from "../../models";
import { DataStore } from "aws-amplify";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderLiveUpdates = ({ id }) => {
  const [order, setOrder] = useState(null);
  const [transporter, setTransporter] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    DataStore.query(Order, id).then(setOrder);
  }, []);

  useEffect(() => {
    if (!order) {
      return;
    }
    const subscription = DataStore.observe(Order, order.id).subscribe((msg) => {
      if (msg.opType === "UPDATE") {
        setOrder(msg.element);
      }
    });
    return () => subscription.unsubscribe();
  }, [order]);

  useEffect(() => {
    if (order?.orderTransporterId) {
      DataStore.query(Transporter, order.orderTransporterId).then(
        setTransporter
      );
    }
  }, [order?.orderTransporterId]);

  // console.log(order);
  // console.log("transporter STATE object: ", transporter);

  useEffect(() => {
    if (transporter?.lng && transporter?.lat) {
      mapRef.current.animateToRegion({
        latitude: transporter.lat,
        longitude: transporter.lng,
        latitudeDelta: 0.07,
        longitudeDelta: 0.07,
      });
    }
  }, [transporter?.lng, transporter?.lat]);

  useEffect(() => {
    if (!transporter) {
      return;
    }
    const subscription = DataStore.observe(
      Transporter,
      transporter.id
    ).subscribe((msg) => {
      if (msg.opType === "UPDATE") {
        setTransporter(msg.element);
      }
    });

    return () => subscription.unsubscribe();
  });

  return (
    <View>
      <Text>Status: {order?.status || "loading"}</Text>
      <MapView style={styles.map} ref={mapRef}>
        {transporter?.lat && (
          <Marker
            coordinate={{
              latitude: transporter.lat,
              longitude: transporter.lng,
            }}
          >
            <View style={styles.markerIcon}>
              <FontAwesome5 name="motorcycle" size={24} color="white" />
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  markerIcon: {
    padding: 5,
    backgroundColor: "green",
    borderRadius: 40,
  },
});

export default OrderLiveUpdates;
