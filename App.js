import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,Header } from 'react-native';
import { MediaProvider } from "./contexts/MediaContext";
import List from "./components/List";

const App = () => {
  return (
    <MediaProvider>
      <List/>
    </MediaProvider>
  );
};



export default App;
