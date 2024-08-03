import Image from "next/image";

export default function FeaturedCategories() {
    return (
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Men', 'Women', 'Accessories'].map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105">
              <Image src={`/images/category${index + 1}.jpg`} alt={category} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  