import { observer } from 'mobx-react-lite';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useTickerStore} from '../TickerContext';
import {ROW_HEIGHT} from './TableRow';

export default observer(() => {
  const tickerStore = useTickerStore();
  const isError = tickerStore?.isError ?? false;
  console.log(tickerStore);

  const width = Dimensions.get('window').width - 20;
  return (
    <View>
      <View style={tableHeaderStyles.tableHeader}>
        <Text
          style={{
            ...tableHeaderStyles.columnHeading,
            ...tableHeaderStyles.textColumnHeading,
            width: width / 4,
          }}>
          Тикер
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
      {isError ? (
        <View style={tableHeaderStyles.errorRow}>
          <Text style={tableHeaderStyles.errorText}>Ошибка</Text>
        </View>
      ) : null}
    </View>
  );
});

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
  errorRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e53935',
    height: ROW_HEIGHT,
  },
  errorText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
