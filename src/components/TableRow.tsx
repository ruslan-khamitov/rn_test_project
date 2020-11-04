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
  row: HandledTicker;
}

export default (props: TableRowProps) => {
  const {row} = props;
  console.log(row);

  const width = Dimensions.get('window').width;
  return (
    <View style={tableRowStyles.tableRow}>
      <TableCell width={width / 4} type={CellType.String} value={row.ticker} />
      <TableCell width={width / 4} type={CellType.Number} value={row.last} />
      <TableCell
        width={width / 4}
        type={CellType.Number}
        value={row.highestBid}
      />
      <TableCell
        width={width / 4}
        type={CellType.Number}
        value={row.percentChange}
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
