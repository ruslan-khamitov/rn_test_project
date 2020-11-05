import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import Table from '../components/Table';
import {useTickerStore} from '../TickerContext';
import {observer} from 'mobx-react-lite';
import {useIsFocused} from '@react-navigation/native';
import useInterval from '../hooks/useInterval';

export default observer(() => {
  const tickerStore = useTickerStore();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (tickerStore?.isEmpty) {
      tickerStore.updateData();
    }
  }, [tickerStore]);

  useInterval(() => {
    if (!isFocused) {
      return;
    }
    tickerStore?.updateData();
  }, 5000);

  return (
    <SafeAreaView>
      <Text style={StockStyles.header}>Котировки</Text>
      <Table data={tickerStore?.handledData ?? []} />
      {tickerStore?.isLoading ? (
        <ActivityIndicator style={StockStyles.activityIndicator} />
      ) : null}
    </SafeAreaView>
  );
});

export const StockStyles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    marginLeft: 10,
    paddingTop: 5,
  },
  activityIndicator: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
