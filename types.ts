export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Service';
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  lastPurchaseDate: string;
  status: 'Active' | 'Completed' | 'Overdue' | 'Pending';
  tags?: string[];
  avatar?: string;
}

export interface InstallmentPlan {
  id: string;
  customerId: string;
  customerName: string;
  customerAvatar?: string;
  totalAmount: number;
  paidAmount: number;
  nextDueDate: string;
  status: 'Active' | 'Overdue' | 'Paid Off';
  payments: PaymentRecord[];
}

export interface PaymentRecord {
  id: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Upcoming' | 'Scheduled';
  type: 'payment' | 'due';
}

export interface CartItem extends Product {
  quantity: number;
}