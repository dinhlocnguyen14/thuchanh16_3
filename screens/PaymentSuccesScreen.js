import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function PaymentSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <Image
        source={require("../assets/images/Group 167.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Payment Success, Yayy!</Text>

      <Text style={styles.desc}>
        We will send order details and invoice in your contact and registered
        email
      </Text>

      <TouchableOpacity style={styles.detailsBtn}>
        <Text style={styles.detailsText}>Check Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadBtn}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PaymentSuccessScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 30,
  },

  back: {
    alignSelf: "flex-start",
    fontSize: 22,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginVertical: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: "#777",
    marginBottom: 30,
  },

  detailsBtn: {
    marginBottom: 20,
  },

  detailsText: {
    color: "#4C6EF5",
    fontWeight: "600",
  },

  downloadBtn: {
    backgroundColor: "#5A6BEF",
    padding: 18,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },

  downloadText: {
    color: "#fff",
    fontWeight: "600",
  },
});
