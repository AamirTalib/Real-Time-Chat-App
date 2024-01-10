import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='105465a9-66bf-4b84-9034-60e87d910466'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage