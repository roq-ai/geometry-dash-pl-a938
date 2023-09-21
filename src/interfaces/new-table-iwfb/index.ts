import { GetQueryInterface } from 'interfaces';

export interface NewTableIwfbInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface NewTableIwfbGetQueryInterface extends GetQueryInterface {
  id?: string;
}
