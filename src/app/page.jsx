// Importa los estilos de Tailwind CSS según sea necesario
import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-20 gap-5 w-full">
      <h1 className="text-4xl font-bold">¡Bienvenido al Visualizador de Algoritmos!</h1>
      <p className="text-lg">
        Este es un visualizador paso por paso de algoritmos creado con Next.js
      </p>
    </div>
  );
}

export default Home;
