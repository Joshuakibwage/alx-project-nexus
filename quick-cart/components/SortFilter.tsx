'use client';

import { useDispatch } from 'react-redux';
import { setPriceSort } from '@/store/slices/filterSlice';

export default function SortFilter() {
    
  const dispatch = useDispatch();

  return (
    <select
      onChange={(e) => dispatch(setPriceSort(e.target.value as 'asc' | 'desc'))}
      className="border rounded-lg px-3 py-1"
    >
      <option value="">Sort by Price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
}
