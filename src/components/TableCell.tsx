import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CellType, ROW_HEIGHT} from './TableRow';

export interface TableCellProps {
  value: string;
  type: CellType;
  width: number;
}

export default (props: TableCellProps) => {
  const {value, type, width} = props;

  const getValue = (cellValue: string, cellType: CellType): string => {
    if (cellType === CellType.Number) {
      return parseFloat(cellValue).toFixed(3);
    }
    return cellValue;
  };

  const isString = type === CellType.String;
  const justifyContent = isString ? 'flex-start' : 'flex-end';
  const textAlign = isString ? 'left' : 'right';
  const fontWeight = isString ? 'bold' : 'normal';
  return (
    <View
      style={{
        ...tableCellStyles.cell,
        justifyContent,
        width,
      }}>
      <Text
        style={{
          textAlign,
          fontWeight,
        }}>
        {getValue(value, type)}
      </Text>
    </View>
  );
};

const tableCellStyles = StyleSheet.create({
  cell: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    height: ROW_HEIGHT,
  },
});
