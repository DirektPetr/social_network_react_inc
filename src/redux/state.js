import logo__img1 from "../img/logo__img__1.jpg";
import logo__img2 from "../img/logo__img__2.jpg";
import logo__img3 from "../img/logo__img__3.jpg";
import logo__img4 from "../img/logo__img__4.jpg";
import logo__img5 from "../img/logo__img__5.jpg";

const state = {
    postsData: [
        {id: 1, img: logo__img1, message: 'Lorem ipsum dolor sit amet, consetetur', likesCount: 14},
        {id: 2, img: logo__img2, message: 'Lorem ipsum dolor', likesCount: 34},
        {id: 3, img: logo__img3, message: 'Lorem ipsum dolor sit', likesCount: 4},
        {id: 4, img: logo__img4, message: 'Lorem ipsum dolor sit amet', likesCount: 30},
        {id: 5, img: logo__img5, message: 'Lorem dolor sit amet', likesCount: 3},
    ],
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

export default state