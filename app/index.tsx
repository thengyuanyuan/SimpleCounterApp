import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0,
  };

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1,
    });
    console.log("Value: " + this.state.value);
    console.log("Total Tap: " + this.state.total_taps);
  };

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      total_taps: this.state.total_taps + 1,
    });
    console.log("Value: " + this.state.value);
    console.log("Total Tap: " + this.state.total_taps);
  };

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi, This is a simple counter app.</Text>
        <Text style={{ fontSize: 60, marginBottom: -20 }}>
          {this.state.value}
        </Text>
        <Text style={{ fontSize: 12, padding: 20, color: "green" }}>
          Total Taps: {this.state.total_taps}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button onPress={this.decrementValue} title="Decrement"></Button>
          <Text> </Text>
          <Button onPress={this.incrementValue} title="Increment"></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#304ffe",
    fontSize: 20,
    padding: 20,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#29b6f6",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
