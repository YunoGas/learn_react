import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom"
import News from "./components/News/News";
import Musics from "./components/Musics/Musics";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  {/*<Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/news' component={News}/>
                  <Route path='/musics' component={Musics}/>
                  <Route path='/settings' component={Settings}/>*/}

                  <Route path='/dialogs' render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                  <Route path='/profile' render={()=> <Profile posts={props.posts}/> }/>
                  <Route path='/news' render={()=> <News/> }/>
                  <Route path='/musics' render={()=> <Musics/> }/>
                  <Route path='/settings' render={()=> <Settings/> }/>

              </div>
          </div>
      </BrowserRouter>
  )
}




export default App;
