import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../Views/Task5/store/usersSlice.ts'
import membershipsReducer from '../Views/Task5/store/membershipsSlice.ts'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        memberships: membershipsReducer,
    },
    devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
