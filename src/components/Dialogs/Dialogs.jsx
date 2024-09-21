import s from './Dialogs.module.scss';
import {Users} from "./Users/Users";
import {Messages} from "./Messages/Messages";

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs_items}>
            <Users usersData={props.usersData}/>
            <Messages messagesData={props.messagesData}/>
        </div>
    )
}
