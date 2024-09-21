import s from "./Messages.module.scss";

export const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Messages = (props) => {
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);
    return (
        <div className={s.messages}>
            <h3>Messages</h3>
            {messagesElements}
        </div>
    );
};
