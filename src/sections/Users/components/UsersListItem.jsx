export default function UsersListItem({ user }) {
    return (
        <li style={{ background: user.favouriteColour }}>
            <img src={user.profileImage} />
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>{user.email}</p>
        </li>
    )
}