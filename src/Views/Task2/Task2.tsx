import './task2.css'
import Button from './Components/Button/button'

const Task2 = () => {
    return (
        <div className="task2">
            <Button className="btn btn--primary" text="Primary" onClick={() => console.log('Priamry button is clicked')}/>
            <Button className="btn btn--secondary" text="Secondary"/>
            <Button className="btn btn--tertiary" text="Tertiary"/>
            <Button className="btn btn--disabled" text="Disabled" disabled />
        </div>
    )
}
export default Task2
