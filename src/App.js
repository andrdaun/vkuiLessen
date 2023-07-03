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
  SimpleCell, Cell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Menu from "./components/Menu";
import {ImageContainer} from "./components/ImageContainer";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [panel, setPanel] = useState('home')
  return (
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={true} />}>
          <SplitCol maxWidth={200}>{Menu.map((item) => {
            return <Cell key = {item.id} before={item.icon} onClick={() => {setPanel(item.id)}}>{item.title}</Cell>
          })}</SplitCol><SplitCol autoSpaced>
            <View activePanel={panel}>
              <Panel id = 'work'>
                <div>Это место для работы</div>
              </Panel>
              <Panel id = 'car'>
                <ImageContainer/>
              </Panel>
              <Panel id = 'home'>
                <PanelHeader>{ToDoList.map((item) => {
                  return <Cell key = {item.id} before={item.icon} onClick={() => {setPanel(item.id)}}>{item.id}</Cell>
                })}</PanelHeader>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

export default App;