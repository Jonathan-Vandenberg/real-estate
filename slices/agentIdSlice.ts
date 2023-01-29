import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface AgentIdState {
  agentId: string | undefined;
}

export const agentIdSlice = createSlice({
  name: "agentId",
  initialState: {
    agentId: "",
  },
  reducers: {
    setAgentId: (state, action: PayloadAction<string>) => {
      state.agentId = action.payload;
    },
  },
});

export const { setAgentId } = agentIdSlice.actions;
export default agentIdSlice.reducer;
// Other code such as selectors can use the imported `RootState` type
export const selectAgentId = (state: RootState) => state.agentId.agentId;
