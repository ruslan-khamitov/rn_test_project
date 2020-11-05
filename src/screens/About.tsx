import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StockStyles} from './Stock';

export default () => {
  return (
    <SafeAreaView>
      <Text style={StockStyles.header}>О приложении</Text>
      <Text style={aboutStyles.about}>
        Для создания приложения были использованы: TypeScript, MobX
      </Text>
    </SafeAreaView>
  );
};

const aboutStyles = StyleSheet.create({
  about: {
    fontSize: 14,
    padding: 10,
  },
});
