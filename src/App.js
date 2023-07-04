import React, {useState} from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell, Cell, PanelHeaderClose, PanelHeaderBack, List, Avatar, Placeholder, Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Menu from "./components/Menu";
import {ImageContainer} from "./components/ImageContainer";
import ToDoList from "./components/ToDoList";
import './App.css';

const App = () => {
  const [panel, setPanel] = useState('home');
  const [mainPanel, setMainPanel] = useState('panel1');
  const [draggingList, updateDraggingList] = React.useState([
    'Посмотреть обучающее видео',
    'Изучить vkui',
    'Выполнить домашнее задание',
    'Закомитить',
    'Запушить',
  ]);

  const onDragFinish = ({ from, to }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };

  return (
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={true} />}>
          <SplitCol maxWidth='200px' fixed={true} width={200}>
            <Group className='navigation-menu'>
            {Menu.map((item) => {
            return <Cell key = {item.id} before={item.icon} onClick={() => {setPanel(item.id)}}>{item.title}</Cell>
          })}
            </Group>
            <View activePanel={panel}>
              <Panel id='home'>
              </Panel>
            </View>
          </SplitCol>
          <SplitCol autoSpaced>
            <View activePanel={panel}>
              <Panel id='work'>
                <div>Это место для работы</div>
              </Panel>
              <Panel id='car'>
                <PanelHeader>
                  Это «Audi a6», которая мне понравилась.
                </PanelHeader>
                <ImageContainer/>
              </Panel>
              <Panel id='home'>
              <PanelHeader>
                Список
              </PanelHeader>
              <Group>
                <List>
                  {draggingList.map((item) => (
                      <Cell key={item} draggable onDragFinish={onDragFinish}>
                        {item}
                      </Cell>
                  ))}
                </List>
              </Group>
            </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
        </AppRoot>
  );
};

export default App;