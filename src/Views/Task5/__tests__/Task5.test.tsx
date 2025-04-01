import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../store/store.ts'
import Task5 from '../Task5.tsx'

const MockReduxStore = (props: { children: React.ReactNode }) => {
    return <Provider store={store}>{props.children}</Provider>
}

describe('Task5', () => {
    test('gold members', () => {
        render(
            <MockReduxStore>
                <Task5 />
            </MockReduxStore>
        )

        expect(
            screen.getByTestId('gold-member').querySelectorAll('.member')
        ).toHaveLength(3)
    })
    test('silver members', () => {
        render(
            <MockReduxStore>
                <Task5 />
            </MockReduxStore>
        )

        expect(
            screen.getByTestId('silver-member').querySelectorAll('.member')
        ).toHaveLength(2)
    })
    test('bronze members', () => {
        render(
            <MockReduxStore>
                <Task5 />
            </MockReduxStore>
        )

        expect(
            screen.getByTestId('bronze-member').querySelectorAll('.member')
        ).toHaveLength(2)
    })
    test('non members', () => {
        render(
            <MockReduxStore>
                <Task5 />
            </MockReduxStore>
        )

        expect(
            screen.getByTestId('non-member').querySelectorAll('.member')
        ).toHaveLength(1)
    })
})
