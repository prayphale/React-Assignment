import React from 'react';
import UserImage from '../UserImage/userImage';
import UserName from '../UserName/userName';
import Buttons from '../../buttons/buttons';

const UserDetails = (props: any) => {
   
    return (
        <>
        <div className="row">
            <UserImage getUserImage = {props.usersList.avatar_url} />
            <UserName getUserName = {props.usersList.login} /> 
            {/*  getUserName = {props.userList.login} */}
            <Buttons />
        </div>    
        <hr />    
        </> 
    ); 
};
export default UserDetails;