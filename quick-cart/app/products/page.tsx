import CategoryFilter from '@/components/CategoryFilter';
import ProductList from '@/components/ProductList';
import SortFilter from '@/components/SortFilter';
import SearchBar from '@/components/SearchBar';

export default function ProductsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Sidebar: Categories */}
      <aside className="w-full md:w-1/4">
        <CategoryFilter />
      </aside>

      {/* Main Content: Products */}
      <main className="w-full md:w-3/4 space-y-4">
        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <SearchBar />
          <SortFilter />
        </div>

        {/* Product Grid */}
        <ProductList />
      </main>
    </div>
  );
}
