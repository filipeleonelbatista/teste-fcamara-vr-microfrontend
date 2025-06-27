import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "shared/redux/slices/productsSlice";
import type { AppDispatch } from "shared/redux/store";
const RemoteHeader = React.lazy(() => import("header/Header"));
const RemoteFooter = React.lazy(() => import("footer/Footer"));
import ProductList from "cards/ProductList";
const App = () => {
  const dispatch = useDispatch<AppDispatch>();

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
          <div className="bg-green-800 p-6 mb-6 text-white flex flex-col items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">HEALTHY AND FRESH GROCERY</h2>
              <p className="mb-4 max-w-lg">
                We pride ourselves on providing a curated of the finest, nutrient-rich products that cater to your health conscious lifestyle.
              </p>
              <button className="bg-white text-green-800 px-4 py-2 rounded font-semibold">LEARN MORE</button>
            </div>
            <img src="./images/hero.png" alt="grocery" />
          </div>
          <ProductList />
        </main>
        <Suspense fallback={<div>Carregando Footer...</div>}>
          <RemoteFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default App;