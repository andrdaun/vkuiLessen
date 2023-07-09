import { Avatar, Cell, Group } from "@vkontakte/vkui";

const Friends = ({ friends }) => {
  return friends.map((friend) => {
    const fullName = `${friend.first_name} ${friend.last_name}`;

    return (
      <div style={{ display: "flex", padding: "5px", borderRadius: "70px" }}>
        <img src={friend.photo_50} alt={fullName} />
        <span>{fullName}</span>
      </div>
    );
  });
};

const FriendsList = ({ friends }) => (
  <Group className="w-100">
    {friends.map((friend) => {
      const fullName = `${friend.first_name} ${friend.last_name}`;

      return <Cell before={<Avatar src={friend.photo_100} />}>{fullName}</Cell>;
    })}
  </Group>
);

export { FriendsList };
export default Friends;
