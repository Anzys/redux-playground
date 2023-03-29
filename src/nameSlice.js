import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDt: "",
  dtList: [],
};
const nameSlice = createSlice({
  name: "userName",
  initialState,
  reducer: {
    setFormDt: (state, action) => {
      state.formDt = action.payload;
    },
    setDtList: (state, action) => {
      state.dtList = [...state.dtList, state.formDt];
    },
  },
});
const { reducer, actions } = nameSlice;
export const { setFormDt, setDtList } = actions;

export default reducer;
