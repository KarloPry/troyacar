import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Other = () => {
  return (
    <View>
      <Text>Other</Text>
      <Link href="/(tabs)">
      <Text style={{ color: "white", marginTop: 40 }}></Text>
      

      </Link>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Other;
