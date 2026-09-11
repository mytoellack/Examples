import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.textLabel}>W2RLS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7bebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 100,
    color: "blue",
    textAlign: "center",
    fontStyle: "italic",
  },
});
