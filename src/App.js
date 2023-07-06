import React, {useEffect, useState} from 'react';
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
import WorkCases from "./components/WorkCases";
import {User} from "./components/User";
import bridge from "@vkontakte/vk-bridge";
import Friends from "./components/Friends";

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
const [user, setUser] = useState(null);
const [token, setToken] = useState('');
const [friends, setFriends] = useState([]);

  useEffect(() => {
    bridge.send('VKWebAppGetAuthToken', {
      app_id: 51696656,
      scope: 'friends,status'
    })
        .then((data) => {
          if (data.access_token) {
            setToken(data.access_token)
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }, [])

  useEffect(() => {
    if(token) {
      bridge.send('VKWebAppCallAPIMethod', {
        method: 'friends.get',
        params: {
          access_token: token,
          v: '5.131',
          user_id: 508868218,
          fields: 'nickname,photo_100,domain'
        },

      })
          .then((data) => {
            setFriends(data.response.items)
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },[token])

  const onDragFinish = ({ from, to }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };

useEffect(() => {
  console.log(panel)
}, [panel])
  return (
      <AppRoot>
        <SplitLayout>
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
                {WorkCases.map((item) => {
                  return <Cell key={item.id} before={item.icon} onClick={() => {setPanel(item.id)}}>
                    {item.title}
                  </Cell>
                })}
              </Panel>
              <Panel id='car'>
                  Это «Audi a6», которая мне понравилась.
                <ImageContainer/>
              </Panel>
              <Panel id='friends'>
                <Friends friends={friends} accessToken={token}/>
              </Panel>
              <Panel id='home'>
                <Group>
                <User user={user}/>
              </Group>
            </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
        </AppRoot>
  );
};

export default App;