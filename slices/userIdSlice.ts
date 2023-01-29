import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface UserIdState {
  userId: string | undefined;
}

export const userIdSlice = createSlice({
  name: "userId",
  initialState: {
    userId: "",
  },
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;
export default userIdSlice.reducer;
// Other code such as selectors can use the imported `RootState` type
export const selectUserId = (state: RootState) => state.userId.userId;
