"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold">Algo salió mal</h2>
      <p className="text-gray-600">
        Ocurrió un error inesperado. Intenta de nuevo.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
      >
        Reintentar
      </button>
    </div>
  );
}