import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

      {/* INSIGHTS */}
      <Text style={styles.sectionTitle}>Your Insights</Text>

      <View style={styles.grid}>
        {/* SCAN */}
        <TouchableOpacity
          style={styles.card}
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

        {/* COUNTERFEITS */}
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

        {/* SUCCESS */}
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

        {/* DIRECTORY */}
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

      {/* EXPLORE */}
      <View style={styles.exploreHeader}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <Text style={styles.arrow}>→</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.exploreCard}>
          <Image
            source={require("../assets/images/Cart/Milk.jpg")}
            style={styles.exploreImage}
          />
        </View>

        <View style={styles.exploreCard}>
          <Image
            source={require("../assets/images/Cart/jucie1.jpg")}
            style={styles.exploreImage}
          />
        </View>

        <View style={styles.exploreCard}>
          <Image
            source={require("../assets/images/Cart/Rectangle 31.jpg")}
            style={styles.exploreImage}
          />
        </View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/home.jpg")}
            style={styles.navIconActive}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/icons/bell.jpg")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/icons/Vector.jpg")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/icons/Group 154.jpg")}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        {/* CART */}
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image
            source={require("../assets/icons/Group 161.png")}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
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

  exploreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  arrow: {
    fontSize: 22,
  },

  exploreCard: {
    width: 100,
    height: 100,
    backgroundColor: "#ECECF1",
    borderRadius: 20,
    marginRight: 15,
    overflow: "hidden",
  },

  exploreImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 30,
    marginBottom: 20,
  },

  navIcon: {
    width: 24,
    height: 24,
    opacity: 0.9,
  },

  navIconActive: {
    width: 24,
    height: 24,
  },
});
