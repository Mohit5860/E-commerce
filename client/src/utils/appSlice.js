import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarOpen: false,
        isNavbarOpen: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleNavbar: (state) => {
            state.isNavbarOpen  = !state.isNavbarOpen;
        }
    }
})

export const {toggleSidebar, toggleNavbar} = appSlice.actions;
export default appSlice.reducer;