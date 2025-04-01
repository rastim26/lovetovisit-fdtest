// src/App.tsx
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ViewRoutes from './Views/ViewRoutes.tsx'
import { store } from './store/store.ts'

// App Component
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <ViewRoutes />
            </Router>
        </Provider>
    )
}

export default App
