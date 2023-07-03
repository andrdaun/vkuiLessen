import React from "react";
import {
    Icon16Music,
    Icon20BookOutline,
    Icon20HieroglyphCharacterOutline,
    Icon24Smile,
    Icon24VideocamAddOutline,
} from "@vkontakte/icons";

const ToDoList = [{
    id: 'music',
    title: 'Включить музыку',
    icon: <Icon16Music width={30} height={30}/>,
}, {
    id: 'video',
    title: 'Посмотреть обучающее видео',
    icon: <Icon24VideocamAddOutline width={30} height={30}/>,
}, {
    id: 'translate',
    title: 'Перевести непонятные слова vkui',
    icon: <Icon20HieroglyphCharacterOutline width={30} height={30}/>,

}, {
    id: 'read',
    title: 'Прочитать документацию',
    icon: <Icon20BookOutline width={30} height={30}/>
}, {
    id: 'end',
    title: 'Порадоваться за выполненный список дел!',
    icon: <Icon24Smile width={30} height={30}/>
}];

export default ToDoList;