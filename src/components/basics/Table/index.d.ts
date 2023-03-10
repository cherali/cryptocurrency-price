import type { ReactNode } from 'react'

type CellType = JSX.Element | JSX.Element[] | ReactNode

type TableRowSize = 'sm' | 'lg'

export interface Column<T> {
  accessor: keyof T | string;
  header: string | ReactNode;
  Cell?: (value: T) => CellType;
  defaultValue?: number | string | boolean;
  width?: string;
}

export interface TableProps<T extends object> {
  columns: Array<Column<T>>;
  data: Array<T> | undefined;
  showTableNumber?: boolean;
  loading?: boolean;
  rowSize?: TableRowSize;
  extendBody?: ReactNode;
  cellKey?: keyof T; // select this as key for mapping on data
}