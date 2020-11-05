import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {HandledTicker} from '../types/Ticker';
import TableHeader from './TableHeader';
import TableRow, {ROW_HEIGHT} from './TableRow';

export interface TableProps {
  data: HandledTicker[];
}

export default (props: TableProps) => {
  const {data} = props;
  return (
    <FlatList<HandledTicker>
      ListHeaderComponent={() => <TableHeader />}
      data={data}
      renderItem={TableRow}
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
