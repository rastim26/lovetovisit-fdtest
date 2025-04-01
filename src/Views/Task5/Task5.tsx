import './task5.css'
import { useAppSelector } from '../../store/store.ts'
import { getUsers, getMemberships } from './selectors.ts'

interface MemberProps {
    member: {
        firstName: string
        lastName: string
        age: number
        membership: string
    },
    membershipName: string
}

interface MembershipProps {
    membership: {
        name: string,
        id: string
    }
}

const Member = ({member, membershipName}: MemberProps) => {
    const { firstName, lastName, age } = member;
    return (
        <div className="member">
            <span>Name:</span> <span>{firstName + ' ' + lastName}</span>
            <span>Age:</span> <span>{age}</span>
            <span>Membership:</span> <span className="member__membership">{membershipName}</span>
        </div>
    )
}

const GroupMembers = ({membership}: MembershipProps) => {
    const members = useAppSelector(getUsers);
    const membersGroup = members.filter(member => member.membership === membership.id);
    return (
        <section data-testid={membership.name + "-member"}>
            <h2 className="group-name">{membership.name} Members</h2>
            {membersGroup.map((member, index) => (    
                <Member key={index} member={member} membershipName={membership.name} />
            ))}
        </section>
    )
}

const Task5 = () => {
    const memberships = useAppSelector(getMemberships);
    return (
        <div className="task5">
            {memberships.map((membership, index) => (
                <GroupMembers membership={membership}  key={index}/>
            ))}
        </div>
    )
}

export default Task5
