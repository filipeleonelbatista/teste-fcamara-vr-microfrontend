import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "shared/redux/store";
import ProductItem from "shared/components/ui/ProductItem";

const CATEGORY_IMAGES: Record<string, string> = {
  beauty: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  fragrances: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  furniture: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
  groceries: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
  all: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
};

const ALL_CATEGORY = "all";

const ProductList = () => {
  const { items: products, loading } = useSelector((state: RootState) => state.products);
  const categories = [ALL_CATEGORY, ...Array.from(new Set(products.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);

  const categoryProducts =
    selectedCategory === ALL_CATEGORY
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full px-2 md:px-8 max-w-7xl mx-auto">
      {/* CATEGORIAS */}
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">CATEGORY</h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="cursor-pointer w-[120px] h-[120px] md:w-[154px] md:h-[149px] flex flex-col gap-2 items-center"
            >
              <img
                src={CATEGORY_IMAGES[cat] || "https://via.placeholder.com/80x80?text=Category"}
                alt={cat}
                className="w-[146px] h-auto object-cover rounded-full"
              />
              <p className={`font-bold text-center uppercase text-xs md:text-base
                ${selectedCategory === cat ? "text-green-700" : "text-black"}
              `}>
                {cat === ALL_CATEGORY
                  ? "Todos os Produtos"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}
      <section>
        <h3 className="text-lg font-bold mb-4 mt-14 uppercase">
          {selectedCategory === ALL_CATEGORY
            ? "Todos os Produtos"
            : `Produtos em ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
        </h3>
        {loading ? (
          <div className="text-center py-10">Carregando produtos...</div>
        ) : categoryProducts.length === 0 ? (
          <div className="text-center py-10">Nenhum produto nesta categoria.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categoryProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductList;