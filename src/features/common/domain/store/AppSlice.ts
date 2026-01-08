// import type { PayloadAction } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// import type { UserModel } from "../../data/models/UserModel";
// import type { AreaModel } from "~/features/common/data/models/AreaModel";
// import type { AppDispatch } from "~/main/domain/store/Store";

// // const TOKEN_KEY = "userAuthToken";

// interface SliceState {
//   token: string | null;
//   areas: AreaModel[] | null;
//   userData: UserModel | null;
//   expoPushToken: string;
// }

// const initialState: SliceState = {
//   token: null,
//   areas: [],
//   userData: null,
//   expoPushToken: "",
// };

// const appSlice = createSlice({
//   name: "app",
//   initialState,
//   reducers: {
//     getAuthToken: (state) => {
//       return state;
//     },
//     setAuthToken: (state, action: PayloadAction<{ token: string | null }>) => {
//       return {
//         ...state,
//         token: action.payload.token,
//       };
//     },
//     setAreas: (state, action: PayloadAction<{ areas: AreaModel[] | null }>) => {
//       return {
//         ...state,
//         areas: action.payload.areas,
//       };
//     },
//     getAreas: (state) => {
//       return state;
//     },
//     getUserData: (state) => {
//       return state;
//     },
//     setUserData: (
//       state,
//       action: PayloadAction<{ userData: UserModel | null }>,
//     ) => {
//       return {
//         ...state,
//         userData: action.payload.userData,
//       };
//     },
//     setExpoPushToken: (
//       state,
//       action: PayloadAction<{
//         expoPushToken: string;
//       }>,
//     ) => {
//       state.expoPushToken = action.payload.expoPushToken;
//     },
//   },
// });

// const appReducer = appSlice.reducer;

// interface AppState {
//   app: ReturnType<typeof appSlice.reducer>;
// }

// const {
//   getAuthToken,
//   setAuthToken,
//   setAreas,
//   getAreas,
//   setUserData,
//   getUserData,
//   setExpoPushToken,
// } = appSlice.actions;

// const logoutThunk = () => (dispatch: AppDispatch) => {
//   dispatch(setAuthToken({ token: null }));
//   dispatch(setAreas({ areas: null }));
//   dispatch(setUserData({ userData: null }));
//   dispatch(setExpoPushToken({ expoPushToken: "" }));
// };

// export {
//   appReducer,
//   getAreas,
//   getAuthToken,
//   getUserData,
//   logoutThunk,
//   setAreas,
//   setAuthToken,
//   setExpoPushToken,
//   setUserData,
// };
// export type { AppState };
