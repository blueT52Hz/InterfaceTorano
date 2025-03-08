import { ShippingAddress } from "@/types/user";

export interface Order {
  order_id: string;
  user_id: string | null;
  shipping_address: ShippingAddress;
  cart: Cart;
  note: string | null;
  payment_method: "cod" | "online_payment" | "bank_transfer";
  status: "pending_approval" | "shipping" | "completed" | "canceled";
  discount: number | null;
  shipping_fee: number | 30000;
  final_price: number;
}

interface Cart {
  cart_id: string;
  user_id: string;
  created_at: string;
  cart_total_price: number;
}

interface CartItem {
  cart_id: string;
  cartItem_id: string;
  variant_id: string;
  quantity: number;
  cartItem_total_price: number;
  cartItem_base_price: number;
}
