import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "shared/redux/store";
import { addToCart } from "shared/redux/slices/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading } = useSelector((state: RootState) => state.products);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <section className="p-4">
      <h3 className="text-lg font-bold mb-4">ALL PRODUCTS</h3>
      {loading ? (
        <div className="text-center py-10">Carregando produtos...</div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-green-50 rounded p-4 flex flex-col items-center shadow hover:scale-105 transition">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-24 object-cover rounded mb-2 border"
              />
              <div className="font-semibold mb-1 text-center">{product.title}</div>
              <div className="text-green-700 font-bold mb-2">R$ {product.price.toFixed(2)}</div>
              <button
                className="bg-green-700 text-white px-3 py-1 rounded text-sm w-full mt-auto"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;