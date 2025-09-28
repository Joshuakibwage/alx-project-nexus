'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import client from '@/lib/apolloClient';
import { GET_PRODUCTS } from '@/lib/queries';
import Image from 'next/image';


const ProductList = () => {
    
  const { category, priceSort, search } = useSelector((state: RootState) => state.filters);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      try {
        const { data } = await client.query({
          query: GET_PRODUCTS,
          variables: {
            categoryId: category,
            limit: 10,
            offset: 0,
            sortPrice: priceSort,
          },
        });
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category, priceSort, search]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {
        products.map((product: { id: string; name: string; price: number; image: string }) => (
            <div key={product.id} className="border p-4 rounded-lg">

                <Image
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover mb-2" 
                />

                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category.name}</p>
                <p className="text-xl font-bold">${product.price}</p>
            </div>
        ))
      }

    </div>
  );
};

export default ProductList;
