import s from "./Users.module.scss";
import {NavLink} from "react-router-dom";

export const User = (props) => {
    let path = '/dialog/' + props.id
    return (
        <div className={s.user + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

export const Users = (props) => {
    let usersElements = props.usersData.map(user => <User name={user.name} id={user.id}/>);
    return (
        < div className={s.users}>
            <h3> Users </h3>
            {usersElements}
        </div>
    );
};

