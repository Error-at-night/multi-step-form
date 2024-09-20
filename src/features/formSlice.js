import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // index: 1,
  plan: "monthly",
  selectedPlan: {},
  addOns: []
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // setIndex(state, action) {
    //   state.index += action.payload
    // },
    setPlan(state, action) {
      state.plan = action.payload
    },
    setSelectedPlan(state, action) {
      state.selectedPlan = action.payload
    },
    setAddOns(state, action) {
      state.addOns = action.payload
    }
  }
})

export default formSlice.reducer

export const { setPlan, setAddOns, /* setIndex, */ setSelectedPlan } = formSlice.actions