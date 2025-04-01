import './task1.css'
import ViewTemplate from '../../Components/ViewTemplate/ViewTemplate.tsx'

const Task1 = () => {
    return (
        <ViewTemplate className="task1">
            <header>
                Header <span>Mobile</span>
                <span>Tablet</span>
                <span>Small Desktop</span>
                <span>Large Desktop</span>
            </header>
            <main>
                <div>Block 1</div>
                <div>Block 2</div>
                <div>Block 3</div>
                <div>Block 4</div>
                <div>Block 5</div>
                <div>Block 6</div>
                <div>Block 7</div>
                <div>Block 8</div>
            </main>
            <footer>Fotter</footer>
        </ViewTemplate>
    )
}
export default Task1
