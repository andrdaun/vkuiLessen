import React, { useEffect, useState } from "react";
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  Group,
  Cell,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Menu from "./components/Menu";
import { ImageContainer } from "./components/ImageContainer";
import "./App.css";
import WorkCases from "./components/WorkCases";
import { User } from "./components/User";
import bridge from "@vkontakte/vk-bridge";
import Friends, { FriendsList } from "./components/Friends";
import Pabliki, { ManagerList } from "./components/Pabliki";

const App = () => {
  const [panel, setPanel] = useState("home");
  const [mainPanel, setMainPanel] = useState("panel1");
  const [draggingList, updateDraggingList] = React.useState([
    "Посмотреть обучающее видео",
    "Изучить vkui",
    "Выполнить домашнее задание",
    "Закомитить",
    "Запушить",
  ]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [friends, setFriends] = useState([]);
  const [manager, setManager] = useState([]);

  useEffect(() => {
    bridge
      .send("VKWebAppGetAuthToken", {
        app_id: 51696656,
        scope: "friends,status,groups",
      })
      .then((data) => {
        if (data.access_token) {
          setToken(data.access_token);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      bridge
        .send("VKWebAppCallAPIMethod", {
          method: "friends.get",
          params: {
            access_token: token,
            v: "5.131",
            user_id: "",
            fields: "nickname,photo_100,domain,photo_50",
          },
        })
        .then((data) => {
          setFriends(data.response.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      bridge
        .send("VKWebAppCallAPIMethod", {
          method: "groups.get",
          params: {
            access_token: token,
            v: "5.131",
            user_id: "",
            extended: 1,
            fields: "name, screen_name, photo_100",
          },
        })
        .then((data) => {
          setManager(data.response.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [token]);

  const onDragFinish = ({ from, to }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };

  useEffect(() => {
    console.log(panel);
  }, [panel]);
  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol maxWidth="200px" fixed={true} width={200}>
          <Group className="navigation-menu">
            {Menu.map((item) => {
              return (
                <Cell
                  key={item.id}
                  before={item.icon}
                  onClick={() => {
                    setPanel(item.id);
                  }}
                >
                  {item.title}
                </Cell>
              );
            })}
          </Group>
          <View activePanel={panel}>
            <Panel id="home"></Panel>
          </View>
        </SplitCol>
        <SplitCol autoSpaced>
          <View activePanel={panel}>
            <Panel id="work">
              {WorkCases.map((item) => {
                return (
                  <Cell
                    key={item.id}
                    before={item.icon}
                    onClick={() => {
                      setPanel(item.id);
                    }}
                  >
                    {item.title}
                  </Cell>
                );
              })}
            </Panel>
            <Panel id="car">
              Это «Audi a6», которая мне понравилась.
              <ImageContainer />
            </Panel>
            <Panel id="friends">
              <Cell
                before={<FriendsList friends={friends} accessToken={token} />}
              ></Cell>
            </Panel>
            <Panel id="manager">
              <Cell
                before={<ManagerList manager={manager} accessToken={token} />}
              ></Cell>
            </Panel>
            <Panel id="home">
              <Group>
                <User user={user} />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
