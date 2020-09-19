import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  _View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import profile from "./assets/profile.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.profile} />
      <View style={styles.icondesign}>
        <SimpleLineIcons
          name="camera"
          size={20}
          color="white"
          style={styles.icon}
        />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>School</Text>
        <Text style={styles.info}>Codetrain Ghana</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>dwolino@gmail.com</Text>
        <View style={styles.detailContainer2}>
          <Text style={styles.labels}>Name</Text>
          <Text style={styles.info}>Edmund Quashie</Text>
          <View style={styles.border} />
          <Text style={styles.labels}>Nickname</Text>
          <Text style={styles.info}>IStallion_gh</Text>
          <View style={styles.border} />
          <Text style={styles.labels}>Emergency Contact</Text>
          <Text style={styles.info}>+233244013204</Text>
          <View style={styles.border} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf4f4",
  },
  profile: {
    height: 110,
    width: 110,
    borderRadius: 55,
    position: "absolute",
    top: 105,
    alignSelf: "center",
  },
  detailContainer: {
    display: "flex",
    marginHorizontal: 60,
    position: "absolute",
    top: 250,
  },
  label: {
    fontSize: 16.7,
    color: "#777",
    marginBottom: 6,
  },
  labels: {
    fontSize: 16.7,
    color: "#11b1e7",
    marginBottom: 6,
  },
  info: {
    fontSize: 18.5,
    marginBottom: 20,
  },
  border: {
    borderBottomColor: "#777",
    width: 250,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#11b1e7",
    height: 50,
    borderRadius: 30,
    marginTop: 30,
  },
  btnText: {
    color: "white",
    alignSelf: "center",
    paddingVertical: 10,
    marginTop: 5,
    fontSize: 20,
  },
  icondesign: {
    backgroundColor: "#11b1e7",
    height: 35,
    width: 35,
    borderRadius: 20,
    position: "relative",
    alignSelf: "center",
    top: 160,
    left: 47,
  },
  icon: {
    alignSelf: "center",
    paddingVertical: 6,
  },
});
