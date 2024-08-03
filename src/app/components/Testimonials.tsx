export default function Testimonials() {
    return (
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci viverra, tempor justo nec, commodo urna."</p>
              <div className="mt-4">
                <h3 className="text-xl font-bold">Customer Name</h3>
                <p className="text-gray-600">Location</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  