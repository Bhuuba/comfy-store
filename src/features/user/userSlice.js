import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Вход выполнен успешно");
    },
    logoutUser: (state) => {
      state.user = null;
      // localStorage.clear()
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
