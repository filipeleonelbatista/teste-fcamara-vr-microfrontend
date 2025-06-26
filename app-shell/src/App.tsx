import React, { Suspense } from "react";
import { Button } from "@/components/ui/button"; // Importando do shared

const RemoteHeader = React.lazy(() => import("header/Header"));

const App = () => (
  <div>
    <Suspense fallback={<div>Carregando Header...</div>}>
      <RemoteHeader />
    </Suspense>
    <main className="p-8">
      <h2 className="text-xl">Bem-vindo ao Green Cart Haven!</h2>
      <Button>Botão do shared</Button>
    </main>
  </div>
);

export default App;