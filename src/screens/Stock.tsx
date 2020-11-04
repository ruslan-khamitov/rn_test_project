import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Table from '../components/Table';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.length !== 0) {
      return;
    }
    fetch('https://poloniex.com/public?command=returnTicker')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 10, marginLeft: 10}}>
        Котировки
      </Text>
      <Table data={data} />
    </SafeAreaView>
  );
};
