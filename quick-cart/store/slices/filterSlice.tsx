import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  category: string | null;
  priceSort: 'asc' | 'desc' | null;
  search: string;
}

const initialState: FilterState = {
  category: null,
  priceSort: null,
  search: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setPriceSort: (state, action: PayloadAction<'asc' | 'desc' | null>) => {
      state.priceSort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setPriceSort, setSearch } = filterSlice.actions;
export default filterSlice.reducer;
