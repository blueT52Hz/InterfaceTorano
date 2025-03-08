export interface Product {
  product_id: string;
  product_code: string;
  brand_name: string;
  name: string;
  slug: string;
  description: string;
  base_price: number;
  sale_price?: number | null;
  discount?: number | null;
  created_at: Date;
  published_at: Date | null;
  updated_at: Date;
  collections: Collection[];
  outfit: Outfit[];
  variants: ProductVariant[];
  variant_images: ProductImage[];
}

export interface ProductPreview {
  product_id: string;
  name: string;
  slug: string;
  colorCounr: number;
  sizeCount: number;
  base_price: number;
  sale_price?: number;
  discount?: number | null;
  variant_images: ProductImage[];
}

export interface ProductVariant {
  variant_id: string;
  variant_code: string;
  product_id: string;
  image: ProductImage;
  created_at: Date;
  published_at?: Date;
  updated_at: Date;
  quantity: number;
  color: Color;
  size: Size;
}

export interface ProductImage {
  image_id: string;
  image_url: string;
  created_at: Date;
  published_at?: Date;
  updated_at: Date;
}

export interface Outfit {
  outfit_id: string;
  outfit_name: string;
  image_url: string;
  created_at: Date;
  published_at?: Date | null;
  updated_at: Date;
}

export interface Color {
  color_id: string;
  color_name: string;
  color_code: string;
}

export interface Size {
  size_id: string;
  size_code: string;
}

export interface Collection {
  collection_id: string;
  name: string;
  slug: string;
  created_at: Date;
  published_at?: Date | null;
  updated_at: Date;
}
