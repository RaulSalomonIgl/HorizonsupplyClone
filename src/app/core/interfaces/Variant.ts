export interface Variant {
  id: number;
  title: string;
  option1: string;
  option2: any;
  option3: any;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: any;
  available: boolean;
  name: string;
  public_title: string;
  options: string[];
  price: number;
  weight: number;
  compare_at_price: any;
  inventory_quantity: number;
  inventory_management: string;
  inventory_policy: string;
  barcode: string;
  requires_selling_plan: boolean;
  selling_plan_allocations: any[];
}
