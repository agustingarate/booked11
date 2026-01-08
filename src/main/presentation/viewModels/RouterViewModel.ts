// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// import { $ as AuthTypes } from '~/features/auth/domain/di/Types';
// import { useInjection } from '~/features/common/domain/hooks/Resolver';
// import type { AppState } from '~/features/common/domain/store/AppSlice';
// import {
//   logoutThunk,
//   setUserData,
// } from '~/features/common/domain/store/AppSlice';
// import type { GetUserDataUseCase } from '~/features/common/domain/usecases/GetUserDataUseCase';
// import type { UIState } from '~/features/common/presentation/UIState';
// import { useAppDispatch } from '~/main/domain/store/Store';

// interface RouterViewModel {
//   state: RouteState;
// }

// type RouteState = {
//   isLoggedIn: boolean;
// } & UIState;

// const initialState: RouteState = {
//   loading: true,
//   error: null,
//   isLoggedIn: false,
// };

// const useRouterViewModel = (): RouterViewModel => {
//   const [state, setState] = useState<RouteState>(initialState);
//   const userAuthToken = useSelector((state: AppState) => state.app.token);
//   const userData = useSelector((state: AppState) => state.app.userData);
//   const dispatch = useAppDispatch();
//   const getUserDataUseCase: GetUserDataUseCase = useInjection(
//     AuthTypes.GetUserDataUseCase
//   );

//   useEffect(() => {
//     const initializeAuth = async (): Promise<void> => {
//       try {
//         const token = userAuthToken;

//         if (token && !userData) {
//           const user = await getUserDataUseCase.execute();
//           dispatch(setUserData({ userData: user }));
//         }
//         setState((previous) => ({
//           ...previous,
//           loading: false,
//           isLoggedIn: !!token,
//         }));
//       } catch (error) {
//         console.error('Authentication initialization failed:', error);
//         dispatch(logoutThunk());
//         setState((previous) => ({
//           ...previous,
//           loading: false,
//           isLoggedIn: false,
//         }));
//       }
//     };
//     void initializeAuth();
//   }, [userAuthToken, userData, dispatch, getUserDataUseCase]);

//   return { state };
// };

// export { useRouterViewModel };
