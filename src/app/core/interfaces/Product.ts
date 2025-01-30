import { Medum } from './Medum';
import { Variant } from './Variant';

export interface Product {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags: string[];
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  price_varies: boolean;
  compare_at_price: any;
  compare_at_price_min: number;
  compare_at_price_max: number;
  compare_at_price_varies: boolean;
  variants: Variant[];
  images: string[];
  featured_image: string;
  options: string[];
  media: Medum[];
  requires_selling_plan: boolean;
  selling_plan_groups: any[];
  content: string;
}
