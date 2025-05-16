export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // o Date si lo conviertes
    updatedAt: string; // o Date si lo conviertes
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export type CartProductType = {
  quantity: number;
  product: ProductType;
};

export interface ReviewType {
  rating: number;
  comment: string;
  date: string; // o Date si lo conviertes
  reviewerName: string;
  reviewerEmail: string;
}

export interface resApi {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}

export interface getAllProductsFilters {
  search?: string;
  categories?: string;
  limit?: number;
  skip?: number;
}
