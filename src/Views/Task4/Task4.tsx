import './task4.css'
import UserCard from './Components/UserCard.tsx'

const Task4 = () => {
    return (
        <div className="task4">
            <UserCard name="John Doe" dob="1990-01-01" />
            <UserCard
                firstName="John"
                lastName="Doe"
                dateOfBirth="1980-12-12"
            />
        </div>
    )
}
export default Task4
