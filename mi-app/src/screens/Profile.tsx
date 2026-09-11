import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from '../components/ProfileCard';

export function Profile() {
  return (
    <ScrollView style={styles.container}>
      <ProfileCard
        name="Okabe Rintaro"
        profession="Científico loco"
        city="Tokyo, Japón"
        image={require('mi-app/assets/okabe rintaro.jpg')}
      />

      <ProfileCard
        name="Crhis Brown"
        profession="Artista"
        city="New York, Estados Unidos"
        image={require('mi-app/assets/crhis brown.jpg')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
});