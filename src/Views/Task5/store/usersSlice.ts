import { createSlice } from '@reduxjs/toolkit'

export interface UsersState {
    firstName: string
    lastName: string
    age: number
    membership: string
}

const initialState: UsersState[] = [
    { firstName: 'John', lastName: 'Doe', age: 20, membership: '004' },
    { firstName: 'Paul', lastName: 'Smith', age: 20, membership: '003' },
    { firstName: 'Bill', lastName: 'Creed', age: 20, membership: '002' },
    { firstName: 'Roger', lastName: 'Mile', age: 20, membership: '001' },
    { firstName: 'Colin', lastName: 'Smith', age: 20, membership: '001' },
    { firstName: 'Debra', lastName: 'Colin', age: 20, membership: '002' },
    { firstName: 'Rose', lastName: 'Smith', age: 20, membership: '001' },
    { firstName: 'Julia', lastName: 'Roberts', age: 20, membership: '003' },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = usersSlice.actions

export default usersSlice.reducer
