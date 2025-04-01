import { Route, Routes } from 'react-router-dom'
import Task1 from './Task1/Task1.tsx'
import Task2 from './Task2/Task2.tsx'
import Task3 from './Task3/Task3.tsx'
import Task4 from './Task4/Task4.tsx'
import ViewHome from './Home/ViewHome.tsx'
import Task5 from './Task5/Task5.tsx'

const ViewRoutes = () => {
    return (
        <Routes>
            <Route path="/" index={true} element={<ViewHome />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
            <Route
                path="*"
                element={
                    <div>
                        <h1>404</h1>
                        <p>Page not found!</p>
                    </div>
                }
            />
        </Routes>
    )
}
export default ViewRoutes
