import { createSlice } from '@reduxjs/toolkit';

import { assignActionCreator } from '@/lib/utils';

export interface UIState {
  contentLoading: boolean;
}

const initialState: UIState = {
  contentLoading: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setContentLoading: assignActionCreator<boolean>('contentLoading'),
  },
});

export const uiActions = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
