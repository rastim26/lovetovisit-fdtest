import './user-card.css'

interface UserCardPrimaryProps {
    name?: string
    dob?: string
}
interface UserCardSecondaryProps {
    firstName?: string
    lastName?: string
    dateOfBirth?: string
}

type UserCardProps = UserCardPrimaryProps & UserCardSecondaryProps;

const UserCard = (props: UserCardProps) => {
    const name = props.name || `${props.firstName} ${props.lastName}`
    const dob = props.dob || props.dateOfBirth
    return (
        <div className="user-card">
            <p>Name: {name}</p>
            <p>DOB: {dob}</p>
        </div>
    )
}
export default UserCard
