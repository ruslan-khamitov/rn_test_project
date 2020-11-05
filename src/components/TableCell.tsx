import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CellType, ROW_HEIGHT} from './TableRow';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface TableCellProps {
  value: string;
  type: CellType;
  width: number;
  isAsc?: boolean;
}

export default (props: TableCellProps) => {
  const {value, type, width, isAsc} = props;

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
  const showArrow = isAsc !== undefined;
  return (
    <View
      style={{
        ...tableCellStyles.cell,
        justifyContent,
        width,
      }}>
      {showArrow ? (
        <Icon
          name={isAsc ? 'trending-up' : 'trending-down'}
          size={14}
          color={isAsc ? '#4CAF50' : '#f44336'}
        />
      ) : null}
      <Text
        style={{
          textAlign,
          fontWeight,
          ...tableCellStyles.cellText,
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
  cellText: {
    fontSize: 12,
    paddingLeft: 5,
  },
});
