import {
  Icon12ArrowDown,
  Icon24List,
  Icon24Users,
  Icon24WorkOutline,
  Icon28CarOutline,
} from "@vkontakte/icons";

const Menu = [
  {
    id: "home",
    title: "Домашние дела",
    icon: <Icon24List width={30} height={30} />,
  },
  {
    id: "work",
    title: "Дела по работе",
    icon: <Icon24WorkOutline width={30} height={30} />,
  },
  {
    id: "car",
    title: "Машина",
    icon: <Icon28CarOutline width={30} height={30} />,
  },
  {
    id: "friends",
    title: "Друзья",
    icon: <Icon24Users width={30} height={30} />,
  },
  {
    id: "manager",
    title: "Сообщества",
    icon: <Icon12ArrowDown width={30} height={30} />,
  },
];

export default Menu;
