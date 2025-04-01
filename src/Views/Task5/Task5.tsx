import './task5.css'
import { useAppSelector } from '../../store/store.ts'
import { getUsers } from './selectors.ts'

interface MemberProps {
    member: {
        firstName: string
        lastName: string
        age: number
        membership: string
    }
}

const Member = ({member}: MemberProps) => {
    const { firstName, lastName, age, membership } = member;
    return (
        <div className="member">
            <span>Name:</span> <span>{firstName + ' ' + lastName}</span>
            <span>Age:</span> <span>{age}</span>
            <span>Membership:</span> <span>{membership}</span>
        </div>
    )
}

const Task5 = () => {
    const members = useAppSelector(getUsers)
    return (
        <div className="task5">
            <section data-testid="gold-member">
                <h2>Gold Members</h2>
                {members.filter((member) => (
                    member.membership === '001'
                )).map((member, index) => (    
                    <Member key={index} member={member} />
                ))}
            </section>
            <section data-testid="silver-member">
                <h2>Silver Members</h2>
                {members.filter((member) => (
                    member.membership === '002'
                )).map((member, index) => (
                    <Member key={index} member={member} />
                ))}
            </section>
            <section data-testid="bronze-member">
                <h2>Bronze Members</h2>
                {members.filter((member) => (
                    member.membership === '003'
                )).map((member, index) => (
                    <Member key={index} member={member} />
                ))}
            </section>
            <section data-testid="non-member">
                <h2>Non Members</h2>
                {members.filter((member) => (
                    member.membership === '004'
                )).map((member, index) => (
                    <Member key={index} member={member} />
                ))}
            </section>
        </div>
    )
}

export default Task5
