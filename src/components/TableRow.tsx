import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {HandledTicker} from '../types/Ticker';
import TableCell from './TableCell';

export enum CellType {
  String,
  Number,
}

export const ROW_HEIGHT = 30;

export interface TableRowProps {
  item: HandledTicker;
}

export default (props: TableRowProps) => {
  const {item} = props;

  const width = Dimensions.get('window').width;
  const isAsc = parseFloat(item.percentChange) > 0;
  return (
    <View style={tableRowStyles.tableRow}>
      <TableCell
        isAsc={isAsc}
        width={width / 4}
        type={CellType.String}
        value={item.ticker}
      />
      <TableCell width={width / 4} type={CellType.Number} value={item.last} />
      <TableCell
        width={width / 4}
        type={CellType.Number}
        value={item.highestBid}
      />
      <TableCell
        width={width / 4}
        type={CellType.Number}
        value={item.percentChange}
      />
    </View>
  );
};

const tableRowStyles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
  },
});
