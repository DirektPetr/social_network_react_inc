import logo__img1 from "../img/logo__img__1.jpg";
import logo__img2 from "../img/logo__img__2.jpg";
import logo__img3 from "../img/logo__img__3.jpg";
import logo__img4 from "../img/logo__img__4.jpg";
import logo__img5 from "../img/logo__img__5.jpg";
import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Lorem ipsum dolor sit amet, consetetur', img: logo__img1, likesCount: 14},
            {id: 2, message: 'Lorem ipsum dolor', img: logo__img2, likesCount: 34},
            {id: 3, message: 'Lorem ipsum dolor sit', img: logo__img3, likesCount: 4},
            {id: 4, message: 'Lorem ipsum dolor sit amet', img: logo__img4, likesCount: 30},
            {id: 5, message: 'Lorem dolor sit amet', img: logo__img5, likesCount: 3},
        ],
    },
    messagesPage: {
        usersData: [
            {id: 1, name: 'Petr'},
            {id: 2, name: 'Dimas'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Fedor'},
            {id: 5, name: 'Artur'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'How are you?'},
            {id: 5, message: 'yes'},
        ]
    }
}

export let addPost = (postMessage) => {

    let newPost = {
        id: 6,
        message: postMessage,
        img: logo__img4,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

export default state
