import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';

export default function HomePage() {
  return (
    <div className="space-y-12 p-6">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white rounded-lg p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Find amazing products at unbeatable prices.</p>
        <Link href="/products">
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
        <CategoryFilter />
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example product cards (replace with actual featured products) */}
          <ProductCard name="Product 1" price={99} image="/placeholder.png" />
          <ProductCard name="Product 2" price={149} image="/placeholder.png" />
          <ProductCard name="Product 3" price={199} image="/placeholder.png" />
          <ProductCard name="Product 4" price={249} image="/placeholder.png" />
        </div>
      </section>
    </div>
  );
}
