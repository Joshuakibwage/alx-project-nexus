// components/ProductsList.tsx
import React from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';

export function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const { products, pagination, loading, error, refetch } = useProducts(
    currentPage,
    12,
    searchTerm,
    selectedCategory
  );
  
  const { categories, loading: categoriesLoading } = useCategories();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    refetch(page, searchTerm, selectedCategory);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    refetch(1, searchTerm, selectedCategory);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Search and Filter */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>

      {/* Products Grid */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.salePrice || product.price}</p>
              <a href={`/product/${product.slug}`}>View Details</a>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={!pagination.hasPreviousPage}
          onClick={() => handlePageChange(pagination.currentPage - 1)}
        >
          Previous
        </button>
        
        <span>Page {pagination.currentPage} of {pagination.totalPages}</span>
        
        <button
          disabled={!pagination.hasNextPage}
          onClick={() => handlePageChange(pagination.currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}