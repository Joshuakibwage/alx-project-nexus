'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '@/store/slices/filterSlice';
import client from '../lib/apolloClient';
import { GET_CATEGORIES } from '@/lib/queries';

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await client.query({ query: GET_CATEGORIES });
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul>
        {
            categories.map((category: { id: string; name: string }) => (
                <li key={category.id}>
                    <button
                        className="text-blue-500 hover:underline"
                        onClick={() => dispatch(setCategory(category.id))}
                    >
                        {category.name}
                    </button>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default CategoryFilter;
