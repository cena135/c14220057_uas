export type User = {
  id: number;
  username: string;
  password: string;
  role: 'user' | 'admin';
};

export type Product = {
  id: number;
  nama_produk: string;
  harga_satuan: number;
  quantity: number;
};