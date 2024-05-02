import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        entities: [],
        loading: 'idle',
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = 'loading';
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = 'idle';
        });
    },
});

export default usersSlice.reducer;
