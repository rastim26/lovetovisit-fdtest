import './user-card.css'

type Props = {}

const UserCard = (props: Props) => {
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
