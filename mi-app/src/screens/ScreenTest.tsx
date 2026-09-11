import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export function ScreenTest() {

  const mostrarAlerta = () => {
    Alert.alert(
      "¡Atención!",
      "Has presionado el botón correctamente.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Alerta</Text>
      <Button 
        title="Mostrar Alerta" 
        onPress={mostrarAlerta} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});