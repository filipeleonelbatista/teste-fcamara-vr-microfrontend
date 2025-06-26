import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "shared/redux/store";
import ProductItem from "shared/components/ui/ProductItem";

const ProductList = () => {
  const { items: products, loading } = useSelector((state: RootState) => state.products);

  return (
    <section className="p-4">
      <h3 className="text-lg font-bold mb-4">ALL PRODUCTS</h3>
      {loading ? (
        <div className="text-center py-10">Carregando produtos...</div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;