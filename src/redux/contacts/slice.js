// import { createSlice, createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { logout } from '../auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
// import { selectContacts } from './selectors';
// import { selectNameFilter } from '../filters/selectors';

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const contactIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );

        state.items[contactIndex] = action.payload;
      })
      .addCase(editContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;
