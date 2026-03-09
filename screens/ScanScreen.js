import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* BACK BUTTON */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 22 }}>←</Text>
      </TouchableOpacity>

      {/* PRODUCT IMAGE */}
      <Image
        source={require("../assets/images/juice.png")}
        style={styles.product}
      />

      {/* PRODUCT CARD */}
      <View style={styles.productCard}>
        <Image
          source={require("../assets/images/juice.png")}
          style={styles.smallImage}
        />

        <View>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.title}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={{ fontSize: 28, color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9CDBE",
    alignItems: "center",
    justifyContent: "center",
  },

  back: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },

  product: {
    width: 260,
    height: 420,
    resizeMode: "contain",
  },

  productCard: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallImage: {
    width: 40,
    height: 60,
    resizeMode: "contain",
  },

  brand: {
    color: "#999",
    fontSize: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  addBtn: {
    backgroundColor: "#5B6CFF",
    width: 45,
    height: 45,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
