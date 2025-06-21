import { supabase } from './supabaseClient';
import { User, Product } from '../types';

// Simple username/password check (for demo only; use Supabase Auth for production)
export async function signIn(username: string, password: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single();
  if (error) return null;
  return data as User;
}

export async function getProducts(): Promise<Product[]> {
  const { data } = await supabase.from('products').select('*');
  return data || [];
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();
  if (error) return null;
  return data as Product;
}

export async function updateProduct(id: number, product: Partial<Product>): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id)
    .select()
    .single();
  if (error) return null;
  return data as Product;
}

export async function deleteProduct(id: number): Promise<boolean> {
  const { error } = await supabase.from('products').delete().eq('id', id);
  return !error;
}