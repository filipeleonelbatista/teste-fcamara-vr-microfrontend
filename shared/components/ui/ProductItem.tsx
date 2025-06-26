import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "shared/redux/slices/cartSlice";
import type { AppDispatch } from "shared/redux/store";

interface ProductItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="bg-green-50 rounded p-4 flex flex-col items-center shadow hover:scale-105 transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-24 h-24 object-cover rounded mb-2 border"
      />
      <div className="font-semibold mb-1 text-center">{product.title}</div>
      <div className="text-green-700 font-bold mb-2">R$ {product.price.toFixed(2)}</div>
      <button
        className="bg-green-700 text-white px-3 py-1 rounded text-sm w-full mt-auto"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;