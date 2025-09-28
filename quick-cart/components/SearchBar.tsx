'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/slices/filterSlice';

export default function SearchBar() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(value));
  };

  return (
    <div className="flex gap-2">

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border rounded-lg px-3 py-1 w-full"
      />
      
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded-lg">
        Search
      </button>
    </div>
  );
}
