import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import ProfileInfo from '../../userProfile/profileInfo/profileInfo';


const UserName = (props: any) => {

    // const[getUserProfile, setUserProfile] = useState('');
   
    // useEffect(() => {
    //     axios.get(`https://api.github.com/users/${props.getUserName}`)
    //         .then(result => 
    //             setUserProfile(result.data)
    //         );
    // }, []);

    // const getOpenUserProfile = () => {
    //     // <Router>
    //     //     {/* <Switch>
    //     //         <Route exact={true} path="/:username" component={ProfileInfo} />
    //     //     </Switch> */}
    //     //     <Switch>
    //     //         {/* <Route exact path= "/" render={() => (
    //     //           <Redirect to="/customerlist"/>
    //     //         )}/> */}
    //     //          <Route exact path='/mojombo' component={ProfileInfo} />
    //     //   </Switch>
    //     // </Router>
    //     this.props.history.push('/mojombo');
    // };

    return (        
        <Router>
            <div className="col-md-5" >  
                <Link to="/mojombo">
                    <h5>{props.getUserName}</h5> 
                </Link>                
            </div>
            
            <div className="col-md-3"></div>
            <Switch>
                <Route exact path="/mojombo" >
                    <ProfileInfo></ProfileInfo>
                </Route>                
            </Switch>
        </Router>        
    );
};
export default UserName; 