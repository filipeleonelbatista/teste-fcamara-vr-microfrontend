import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "shared/redux/store";
import ProductItem from "shared/components/ui/ProductItem";

// Imagens representativas por categoria (adicione/ajuste conforme suas categorias)
const CATEGORY_IMAGES: Record<string, string> = {
  beauty: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  fragrances: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
  furniture: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
  groceries: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
  all: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp", // imagem genérica para "Todos"
  // Adicione outras categorias conforme necessário
};

const ALL_CATEGORY = "all";

const ProductList = () => {
  const { items: products, loading } = useSelector((state: RootState) => state.products);

  // Agrupa produtos por categoria e adiciona "Todos"
  const categories = [ALL_CATEGORY, ...Array.from(new Set(products.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);

  // Produtos da categoria selecionada ou todos
  const categoryProducts =
    selectedCategory === ALL_CATEGORY
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="p-4">
      {/* CATEGORY */}
      <h3 className="text-lg font-bold mb-4">CATEGORY</h3>
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded font-semibold border ${
              selectedCategory === cat
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-green-700 border-green-300"
            }`}
          >
            <img
              src={CATEGORY_IMAGES[cat] || "https://via.placeholder.com/80x80?text=Category"}
              alt={cat}
              className="w-20 h-20 object-cover rounded shadow border"
            />
            {cat === ALL_CATEGORY
              ? "Todos os Produtos"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Produtos da categoria selecionada */}
      <h3 className="text-lg font-bold mb-4 mt-6">
        {selectedCategory === ALL_CATEGORY
          ? "Todos os Produtos"
          : `Produtos em ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
      </h3>
      {loading ? (
        <div className="text-center py-10">Carregando produtos...</div>
      ) : categoryProducts.length === 0 ? (
        <div className="text-center py-10">Nenhum produto nesta categoria.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;