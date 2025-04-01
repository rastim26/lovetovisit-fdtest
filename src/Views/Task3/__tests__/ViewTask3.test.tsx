import { render, screen } from '@testing-library/react'
import Task3 from '../Task3.tsx'

// This test is setup using Vitest. It is very similar to jest.

describe('ViewTask3', () => {
    test('fake test', () => {
        render(<Task3 />)
        expect(screen.getByText('List on names go here')).toBeDefined()
    })
})
