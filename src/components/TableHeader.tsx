import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export default () => {
  const width = Dimensions.get('window').width - 20;
  return (
    <View style={tableHeaderStyles.tableHeader}>
      <Text
        style={{
          ...tableHeaderStyles.columnHeading,
          ...tableHeaderStyles.textColumnHeading,
          width: width / 4,
        }}>
        Тикет
      </Text>
      <Text
        style={{
          ...tableHeaderStyles.columnHeading,
          ...tableHeaderStyles.numberColumnHeading,
          width: width / 4,
        }}>
        Послед. значение
      </Text>
      <Text
        style={{
          ...tableHeaderStyles.columnHeading,
          ...tableHeaderStyles.numberColumnHeading,
          width: width / 4,
        }}>
        Высш
      </Text>
      <Text
        style={{
          ...tableHeaderStyles.columnHeading,
          ...tableHeaderStyles.numberColumnHeading,
          width: width / 4,
        }}>
        Изменение
      </Text>
    </View>
  );
};

const tableHeaderStyles = StyleSheet.create({
  columnHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textColumnHeading: {
    textAlign: 'left',
  },
  numberColumnHeading: {
    textAlign: 'right',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#00897B',
  },
});
