import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "shared/redux/slices/productsSlice";
import type { AppDispatch } from "shared/redux/store";
const RemoteHeader = React.lazy(() => import("header/Header"));
const RemoteFooter = React.lazy(() => import("footer/Footer"));
const RemoteProducts = React.lazy(() => import("cards/ProductList"));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white rounded-b-lg overflow-hidden">
        <Suspense fallback={<div>Carregando Header...</div>}>
          <RemoteHeader />
        </Suspense>
        <main className="bg-white">
          <div className="bg-green-800 h-[408px] p-6 mb-6 text-white flex flex-row items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">HEALTHY AND FRESH GROCERY</h2>
              <p className="mb-4 max-w-lg">
                We pride ourselves on providing a curated of the finest, nutrient-rich products that cater to your health conscious lifestyle.
              </p>
              <button className="bg-white text-green-800 px-4 py-2 rounded font-semibold">LEARN MORE</button>
            </div>
            <img className="w-1/2" src="./images/hero.png" alt="grocery" />
          </div>
          <Suspense fallback={<div>Carregando Produtos...</div>}>
            <RemoteProducts />
          </Suspense>
        </main>
      </div>
      <Suspense fallback={<div>Carregando Footer...</div>}>
        <RemoteFooter />
      </Suspense>
    </div>
  );
};

export default App;