import './task5.css'
import { useAppSelector } from '../../store/store.ts'
import { getUsers } from './selectors.ts'

const Member = () => {
    return (
        <div className="member">
            <span>Name:</span> <span>John Doe</span>
            <span>Age:</span> <span>20</span>
            <span>Membership:</span> <span>Gold</span>
        </div>
    )
}

const Task5 = () => {
    const members = useAppSelector(getUsers)
    return (
        <div className="task5">
            <section data-testid="gold-member">
                <h2>Gold Members</h2>
                {members.map((member) => (
                    <Member />
                ))}
            </section>
            <section data-testid="silver-member">
                <h2>Silver Members</h2>
                {members.map((member) => (
                    <Member />
                ))}
            </section>
            <section data-testid="bronze-member">
                <h2>Bronze Members</h2>
                {members.map((member) => (
                    <Member />
                ))}
            </section>
            <section data-testid="non-member">
                <h2>Non Members</h2>
                {members.map((member) => (
                    <Member />
                ))}
            </section>
        </div>
    )
}

export default Task5
