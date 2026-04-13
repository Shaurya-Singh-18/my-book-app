import { createSlice } from "@reduxjs/toolkit";

const loadWishlist = () => {
    try {
        const serializedState = localStorage.getItem('wishlist');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};

const initialState = {
    wishlistItems: loadWishlist()
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            const existingItemIndex = state.wishlistItems.findIndex(item => item._id === action.payload._id);
            if (existingItemIndex >= 0) {
                state.wishlistItems.splice(existingItemIndex, 1);
            } else {
                state.wishlistItems.push(action.payload);
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
