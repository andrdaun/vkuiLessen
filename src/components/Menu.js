import {Icon12ArrowDown, Icon16CrownCircleFillVkDating, Icon28HandHeartCircleFillRed} from '@vkontakte/icons';

const Menu = [{
    id: 'home',
    title: 'Раздел',
    icon: <Icon16CrownCircleFillVkDating width={30} height={30}/>,
    }, {
    id: 'work',
    title: 'Место',
    icon: <Icon28HandHeartCircleFillRed width={30} height={30}/>,
}, {
    id: 'car',
    title: 'В машине',
    icon: <Icon12ArrowDown width={30} height={30}/>,
}];

export default Menu;