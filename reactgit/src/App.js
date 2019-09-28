import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/page_components/Home'
import About from './components/page_components/About'
import User from './components/users/User'
import './App.css';

const App = () =>{
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertStatus] = useState(false);
  const [alertBody, setalertBody] = useState({msg: '', type: ''});

   const getInitialAppData = async () =>{
       setLoading(true);
       const res = await axios.get(`https://api.github.com/users?client_id=$995ade02022352ac4714&client_secret=963805ec73c217d58afd8a4b541df77642505df1`);
       setUsers(res.data);
       setLoading(false)
   };

   useEffect(() => {
       getInitialAppData();
       // eslint-disable-next-line
   }, []);

  const searchUsers = async (userText) =>{
      setLoading(true);
      const res = await axios.get(`https://api.github.com/search/users?q=${userText}&client_id=995ade02022352ac4714&client_secret=963805ec73c217d58afd8a4b541df77642505df1`);
      setUsers(res.data.items);
      setLoading(false);
  };

  const getUser = async (username) =>{
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=995ade02022352ac4714&client_secret=963805ec73c217d58afd8a4b541df77642505df1`);
      setUser(res.data);
      setLoading(false);
  };

  const getUserRepos = async (username) =>{
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=995ade02022352ac4714&client_secret=963805ec73c217d58afd8a4b541df77642505df1`);
      setRepos(res.data);
      setLoading(false);
  };

  const setAlert = (msg, type) =>{
      setAlertStatus(true);
      setalertBody({msg: msg, type: type})
      setTimeout(() => setAlertStatus(false), 2000)
  };

  const goHome = () =>{
      getInitialAppData();
  };


    return (
        <Router>
          <div className='App'>
            <Navbar title="GitHub Finder" goHome={goHome}/>
            <div className="container">
                <Switch>
                    <Route exact path='/' render={props => (
                        <Home
                            {...props}
                            alert={alert}
                            alertBody={alertBody}
                            searchUsers={searchUsers}
                            setAlert={setAlert}
                            loading={loading}
                            users={users}
                        />
                    )}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/user/:login' render={props =>(
                        <User
                            {...props}
                            getUser={getUser}
                            getUserRepos={getUserRepos}
                            repos={repos}
                            user={user}
                            loading={loading}
                        />
                    )}/>
                </Switch>
            </div>
          </div>
        </Router>
    );
};

export default App;
