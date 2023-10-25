import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Map  ()  {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.google.com/maps/d/embed?mid=1fHn2nzbu2NuKd0LuBa2EjdQeVMQRBQU&hl=es&ehbc=2E312F' }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:22,
  },
  map: {
    flex: 1,
  },
});
