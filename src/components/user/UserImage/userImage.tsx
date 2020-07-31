import React from 'react';

const UserImage = (props: any) => {

    return (
        <>
             <div className="col-md-1">
                  <img src={props.getUserImage} className="rounded-circle" alt="User Profile" width="60" height="60"></img>
              </div>
        </>
    );
};
export default UserImage; 