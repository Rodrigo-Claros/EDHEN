export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold">Bienvenido a Mi Tienda</h1>
      <p className="mt-2 text-gray-600">
        Encuentra los mejores productos aquí.
      </p>

      {/* Placeholder de productos destacados */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Productos destacados</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {/* Aquí mapearás tus productos reales */}
          <div className="rounded-lg border p-4">
            <p className="text-sm text-gray-500">Producto de ejemplo</p>
          </div>
        </div>
      </section>
    </div>
  );
}