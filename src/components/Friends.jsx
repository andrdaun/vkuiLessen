const Friends = ({friends}) => {
    return friends.map(friend => {
        const fullName = `${friend.first_name} ${friend.last_name}`;

        return <div style={{display: "flex", padding: "5px"}}>
            <img src={friend.photo_100} alt={fullName}/>
            <span>
                {fullName}
            </span>
        </div>
    })
}

export default Friends;