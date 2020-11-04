import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {HandledTicker, UnhandledTickerObj} from '../types/Ticker';
import TableHeader from './TableHeader';
import TableRow, {ROW_HEIGHT} from './TableRow';

export interface TableProps {
  data: UnhandledTickerObj;
}

export default (props: TableProps) => {
  const {data} = props;
  return (
    <FlatList<HandledTicker>
      ListHeaderComponent={() => <TableHeader />}
      data={Object.keys(data).map((key) => ({ticker: key, ...data[key]}))}
      renderItem={({item}) => <TableRow row={item} />}
      keyExtractor={(item) => `${item.id}`}
      stickyHeaderIndices={[0]}
      getItemLayout={(_, index) => ({
        length: ROW_HEIGHT,
        offset: ROW_HEIGHT * index,
        index,
      })}
    />
  );
};
