import { createSlice } from '@reduxjs/toolkit'

export interface MembershipsState {
    name: string
    id: string
}

const initialState: MembershipsState[] = [
    { name: 'gold', id: '001' },
    { name: 'silver', id: '002' },
    { name: 'bronze', id: '003' },
    { name: 'none', id: '004' },
]

export const membershipsSlice = createSlice({
    name: 'memberships',
    initialState,
    reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = membershipsSlice.actions

export default membershipsSlice.reducer
