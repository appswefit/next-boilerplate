export interface SearchTableColumn {
  name: string;
  head: string;
  render?: (data: any) => React.ReactNode;
}

export interface SearchTableProps {
  columns: SearchTableColumn[];
  data: Array<
    {
      id: number;
    } & Record<any, any>
  >;
  total?: number;
  onDetailClick?: (id: number) => void;
  onDeleteClick?: (id: number) => void;
}
