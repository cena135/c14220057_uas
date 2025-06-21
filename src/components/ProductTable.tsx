'use client';

import { Product } from "@/types";

interface ProductTableProps {
  products: Product[];
  isAdmin: boolean;
  onDelete?: (id: number) => void;
  onEdit?: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, isAdmin, onDelete, onEdit }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Nama Produk</th>
          <th className="border border-gray-300 p-2">Harga Satuan</th>
          <th className="border border-gray-300 p-2">Quantity</th>
          {isAdmin && <th className="border border-gray-300 p-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border border-gray-300 p-2">{product.nama_produk}</td>
            <td className="border border-gray-300 p-2">{product.harga_satuan}</td>
            <td className="border border-gray-300 p-2">{product.quantity}</td>
            {isAdmin && (
              <td className="border border-gray-300 p-2">
                <button onClick={() => onEdit?.(product)} className="text-blue-500">Edit</button>
                <button onClick={() => onDelete?.(product.id)} className="text-red-500 ml-2">Delete</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;