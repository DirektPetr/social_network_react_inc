import './App.css';
import {Header} from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="header__main">
                    <Header/>
                    {/*<div className={"main_cover"}></div>*/}
                </div>
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="wrapper__main">
                    <Routes>
                        <Route path='/main' element={<Main
                            state={props.state.profilePage}
                            addPost={props.addPost}
                        />}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            state={props.state.messagesPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <div className="footer__main">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
