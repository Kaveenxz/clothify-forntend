import Image from "next/image";
import product1 from '@/app/images/braids-3959201_1280.jpg'
import product2 from '@/app/images/fashion-5328924_1280.jpg'
import product3 from '@/app/images/people-2583833_1280.jpg'
import product4 from '@/app/images/t-shirt-design-2336850_1280.jpg'
import { useRouter } from "next/navigation";

export default function ProductGrid() {

  const router = useRouter()

  const products = [
    {
      id: 1,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product1
    },
    {
      id: 2,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product2
    },
    {
      id: 3,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product3
    },
    {
      id: 4,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product4
    },
    {
      id: 5,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product4
    },
    {
      id: 6,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product3
    },
    {
      id: 7,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product2
    },
    {
      id: 8,
      name: "Product1",
      category: "Men",
      price: 49.99,
      img: product1
    }
  ]

  const handleProductClick = (id:any)=>{
    router.push("/product/"+id)
  }

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105" onClick={()=> handleProductClick(product.id)}>
            <Image src={product.img} alt="Product" className="w-full h-64 object-cover" />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{product.price}</p>
                <div className="bg-black rounded-full w-8 h-8 text-white items-center flex justify-center text-2xl cursor-pointer">
                  +
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
