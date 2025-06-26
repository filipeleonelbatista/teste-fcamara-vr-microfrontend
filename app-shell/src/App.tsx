import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("header/Header"));

const App = () => (
  <div>
    <Suspense fallback={<div>Carregando Header...</div>}>
      <RemoteHeader />
    </Suspense>
    {/* Cards e Footer virão depois */}
    <main className="p-8">
      <h2 className="text-xl">Bem-vindo ao Green Cart Haven!</h2>
    </main>
  </div>
);

export default App;