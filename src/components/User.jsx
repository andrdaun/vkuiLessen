import {Avatar, Gradient, Group, Header, SimpleCell, Title, Text, Button} from "@vkontakte/vkui";
import {Icon28ComputerOutline} from "@vkontakte/icons";

export const User = ({user}) => (user && user.id) ? <Gradient className={'gradient'}>
        <Avatar src={user.photo_200}/>
        <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
            {user.first_name} {user.last_name}
        </Title>
        <Text style={{
            marginBottom: 24,
            color: 'var(--vkui--color_text_secondary)',
        }}>
            {user.city.title}, {user.country.title}
        </Text>
        <Button size="l" mode="secondary">
            Назначить
        </Button>
        <Group mode="plain">
            <Header>
                Поле с полезной информацией
            </Header>
            <SimpleCell before={<Icon28ComputerOutline/>} >
                Кнопка с Computerom
            </SimpleCell>
        </Group>
    </Gradient> : null
