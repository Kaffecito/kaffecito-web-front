// Tipos globales de la aplicación

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface Order {
  id: string;
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
  }>;
  status: 'pending' | 'completed' | 'cancelled';
  total: number;
  createdAt: Date;
} 