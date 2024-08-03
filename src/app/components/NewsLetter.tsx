export default function Newsletter() {
    return (
      <section className="p-10 bg-yellow-300 text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on new arrivals and special offers.</p>
        <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded border border-black w-64"
          />
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition">
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  