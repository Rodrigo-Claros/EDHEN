import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold">404 - No encontrado</h2>
      <p className="text-gray-600">
        La página o producto que buscas no existe.
      </p>
      <Link
        href="/"
        className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
}