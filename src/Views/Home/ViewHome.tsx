import './view-home.css'
import {Link} from "react-router-dom";
import ViewTemplate from "../../Components/ViewTemplate/ViewTemplate.tsx";

const ViewHome = () => {
    return (
        <ViewTemplate title="Welcome to LTV developer assessment" className="view-home">
            <nav>
                <Link to="/task1">Task 1</Link>
                <Link to="/task2">Task 2</Link>
                <Link to="/task3">Task 3</Link>
                <Link to="/task4">Task 4</Link>
                <Link to="/task5">Task 5</Link>
            </nav>
        </ViewTemplate>
    )
}
export default ViewHome;