export interface Product {
  id: string;
  base64Image: string;
  description: string;
  price: number;
  strikePrice: number;
  title: string;
  selected?: boolean;
}