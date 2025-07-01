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
    <div className="cursor-pointer h-[419px] border border-green-300 rounded p-4 flex flex-col items-center hover:scale-105 transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-[214px] h-auto object-cover mb-2"
      />
      <div className="mb-1 text-center">{product.title}</div>
      <div className="mb-2 text-center">R$ {product.price.toFixed(2)}</div>
      <button
        className="flex bg-green-700 text-white px-3 py-1 rounded text-sm w-fit mt-auto"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;