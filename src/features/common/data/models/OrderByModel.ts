export interface OrderByModel {
  code: string;
  title: string;
  selected: boolean;
  value?: string;
  orderDirection?: OrderDirection;
}

export type OrderDirection = "asc" | "desc";
export type COrderBy = "createdAt";
