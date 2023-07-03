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

const App = () => {
  const [panel, setPanel] = useState('home')
  return (
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol>{Menu.map((item) => {
            return <Cell key = {item.id} before={item.icon} onClick={() => {setPanel(item.id)}}>{item.title}</Cell>
          })}</SplitCol><SplitCol autoSpaced>
            <View activePanel={panel}>
              <Panel id= 'work'>
                <div>Это место для работы</div>
              </Panel>
              <Panel id= 'car'>
                <div>Это место для машины</div>
              </Panel>
              <Panel id= 'home'>
                <PanelHeader>VKUI</PanelHeader>
                <Group header={<Header mode="secondary">Items</Header>}>
                  <SimpleCell>Hello</SimpleCell>
                  <SimpleCell>World</SimpleCell>
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
  );
};

export default App;
