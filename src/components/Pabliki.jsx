import { Avatar, Cell, Group } from "@vkontakte/vkui";
import friends from "./Friends";

const Manager = ({ manager }) => {
  return manager.map((manager) => {
    const managerGroup = `${manager.name}`;

    return (
      <div style={{ display: "flex", padding: "5px" }}>
        <img src={manager.photo_100} alt={managerGroup} />
        <span>{managerGroup}</span>
      </div>
    );
  });
};

const ManagerList = ({ manager }) => (
  <Group className="w-100">
    {manager.map((manager) => {
      const managerGroup = `${manager.name}`;

      return (
        <Cell before={<Avatar src={manager.photo_100} />}>{managerGroup}</Cell>
      );
    })}
  </Group>
);

export { ManagerList };
export default Manager;
