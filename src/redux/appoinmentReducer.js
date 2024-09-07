import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appoinments:[]
}

export const appoinmentSlice = createSlice({
  name: "appoinments",
  initialState,
  reducers: {
    addAppointments: (state, action) => {
      state.appoinments = action.payload
    },
    addAnAppointment: (state, action) => {
      console.log(action.payload);
      const actualData = [...state.appoinments];
      console.log(actualData);
      state.appoinments = [...actualData, action.payload];
    },
  },
});

export const { addAppointments, cancelAppointment, addAnAppointment } =
  appoinmentSlice.actions;