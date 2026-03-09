import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>

        <Image
          source={require("../assets/images/Mask Group.png")}
          style={styles.avatar}
        />
      </View>

      {/* SECTION TITLE */}
      <Text style={styles.sectionTitle}>Your Insights</Text>

      {/* GRID */}
      <View style={styles.grid}>
        {/* CARD 1 */}
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Scan")}
        >
          <View style={[styles.iconBox, { backgroundColor: "#E7ECFF" }]}>
            <Image
              source={require("../assets/icons/Group 157.png")}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>

        {/* CARD 2 */}
        <View style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: "#FFE8DE" }]}>
            <Image
              source={require("../assets/icons/Frame.png")}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeit 32</Text>
        </View>

        {/* CARD 3 */}
        <View style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: "#DFF3EE" }]}>
            <Image
              source={require("../assets/icons/Group 158.png")}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </View>

        {/* CARD 4 */}
        <View style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: "#E3F3FA" }]}>
            <Image
              source={require("../assets/icons/Group 151.png")}
              style={styles.icon}
            />
          </View>

          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  hello: {
    fontSize: 26,
    fontWeight: "700",
  },

  name: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#ECECF1",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  cardSub: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
});
