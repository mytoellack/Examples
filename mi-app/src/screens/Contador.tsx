import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    const nuevoValor = contador + 1;
    setContador(nuevoValor);

    if (nuevoValor === 10) {
      Alert.alert(
        "¡Felicidades!",
        "Has llegado a 10.",
        [{ text: "OK" }]
      );
    }
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  const reiniciarContador = () => {
    setContador(0);
    Alert.alert(
      "Contador reiniciado",
      "El contador ha sido reiniciado a 0.",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>
      <View style={styles.botones}>
        <Button title="Disminuir" onPress={disminuir} />
        <Button title="Aumentar" onPress={incrementar} />
      </View>
      <View style={styles.reiniciar}>
        <Button title="Reiniciar" onPress={reiniciarContador} color="#888" />
      </View>
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
  numero: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botones: {
    flexDirection: 'row',
    gap: 16,
  },
  reiniciar: {
    marginTop: 20,
  },
});