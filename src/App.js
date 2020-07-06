import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/news";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
