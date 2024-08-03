export default function ProductGrid() {
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105">
              <img src={`/images/sample${(index % 4) + 1}.jpg`} alt="Product" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">Product Name</h3>
                <p className="text-gray-600">$49.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  