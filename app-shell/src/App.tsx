import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "shared/redux/slices/productsSlice";
import type { RootState, AppDispatch } from "shared/redux/store";

const RemoteHeader = React.lazy(() => import("header/Header"));
const RemoteFooter = React.lazy(() => import("footer/Footer"));

const Box = ({ children, className = "" }) => (
  <div className={`bg-white rounded shadow p-6 mb-6 ${className}`}>{children}</div>
);

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-green-200 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white rounded-b-lg shadow-lg overflow-hidden">
        <Suspense fallback={<div>Carregando Header...</div>}>
          <RemoteHeader />
        </Suspense>
        <main className="p-8 bg-white">
          <Box className="bg-green-800 text-white flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">HEALTHY AND FRESH GROCERY</h2>
            <p className="mb-4 max-w-lg">
              We pride ourselves on providing a curated of the finest, nutrient-rich products that cater to your health conscious lifestyle.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded font-semibold">LEARN MORE</button>
          </Box>
          <Box>
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
                    <button className="bg-green-700 text-white px-3 py-1 rounded text-sm w-full mt-auto">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Box>
        </main>
        <Suspense fallback={<div>Carregando Footer...</div>}>
          <RemoteFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default App;