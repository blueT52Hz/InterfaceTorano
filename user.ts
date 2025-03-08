import { Order } from "@/types/cart";

export interface User {
  user_id: string;
  full_name: string;
  gender: "Nam" | "Nữ" | "Khác";
  date_of_birth: Date;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  shipping_address: ShippingAddress[];
  order_history: Order[];
}

export interface ShippingAddress {
  address_id: string;
  user_id: string;
  full_name: string;
  phone_number: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  is_default: boolean;
  created_at: Date;
  updated_at: Date;
}
