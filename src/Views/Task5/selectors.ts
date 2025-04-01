import { RootState } from '../../store/store.ts'

export const getMemberships = (state: RootState) => state.memberships
export const getUsers = (state: RootState) => state.users
