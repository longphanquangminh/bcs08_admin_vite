import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: null,
};

// gom action, constants, reducer vào chung 1 nơi gọi là slice

let userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // định nghĩa các action
    setLogin: (state, action) => {
      state.user = action.payload;
      // ko cần return về objecet mới khi dùng toolkit
    },
  },
});

export let { setLogin } = userSlice.actions;
export default userSlice.reducer;
