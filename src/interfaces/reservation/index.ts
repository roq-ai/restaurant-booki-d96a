import { UserInterface } from 'interfaces/user';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  customer_id?: string;
  table_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  table_id?: string;
  status?: string;
}
