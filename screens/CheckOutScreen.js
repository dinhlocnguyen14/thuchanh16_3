import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      <View style={styles.topRow}>
        <Text style={styles.title}>Checkout 💳</Text>

        <View>
          <Text style={styles.price}>₹ 1,527</Text>
          <Text style={styles.tax}>Including GST (18%)</Text>
        </View>
      </View>

      {/* PAYMENT TYPE */}

      <View style={styles.payRow}>
        <View style={styles.creditBtn}>
          <Text style={styles.creditText}>💳 Credit card</Text>
        </View>

        <View style={styles.appleBtn}>
          <Image
            source={require("../assets/icons/Apple icon.png")}
            style={styles.navIcon}
          ></Image>
          <Text> Apple Pay</Text>
        </View>
      </View>

      {/* CARD NUMBER */}

      <Text style={styles.label}>Card number</Text>

      <TextInput style={styles.input} placeholder="5261 4141 0151 8472" />

      {/* NAME */}

      <Text style={styles.label}>Cardholder name</Text>

      <TextInput style={styles.input} placeholder="Christie Doe" />

      {/* DATE + CVV */}

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry date</Text>

          <TextInput style={styles.input} placeholder="06 / 2024" />
        </View>

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.label}>CVV / CVC</Text>

          <TextInput style={styles.input} placeholder="915" />
        </View>
      </View>

      {/* PAY BUTTON */}

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.payText}>🔒 Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20,
    paddingTop: 60,
  },

  back: {
    fontSize: 22,
    marginBottom: 20,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  price: {
    color: "#23B26D",
    fontWeight: "700",
    fontSize: 18,
  },

  tax: {
    fontSize: 12,
    color: "#777",
  },

  payRow: {
    flexDirection: "row",
    marginBottom: 30,
  },

  creditBtn: {
    backgroundColor: "#23B26D",
    padding: 15,
    borderRadius: 15,
    marginRight: 10,
  },

  creditText: {
    color: "#fff",
    fontWeight: "600",
  },

  appleBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
  },

  label: {
    marginBottom: 5,
    color: "#444",
  },

  input: {
    backgroundColor: "#EDEDF1",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
  },

  payButton: {
    backgroundColor: "#23B26D",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 30,
  },

  payText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
