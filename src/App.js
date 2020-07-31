import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './App.css';
import UserDetails from './components/user/UserDetails/userDetails';
import Search from './components/search/search';
import  axios from 'axios';
import ProfileInfo from './components/userProfile/profileInfo/profileInfo';


function App() {
        
    const [getUsers, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users")
            .then(result => 
            setUsers(result.data)
            );
    }, []);
   
    return (
        <div className="App">        

                <Search />
                <div className="container "> 
                    {/* Fetch all list of users from GitHub */}
                    {
                        getUsers.map(user => (
                            <UserDetails usersList= {user} />
                        ))
                    }      
                </div>
                <ProfileInfo />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        username:  state.username,
        userProfile: state.userProfile,
        repos: state.repos

    }
}

export default connect(mapStateToProps)(App);
