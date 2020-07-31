import React from 'react';
import ProfileImage from '../profileImage/profileImage';
import ProfileTitle from '../profileTitle/profileTitle';

const ProfileInfo = () => {

    return (
        <>
            <div className="row">
                <ProfileImage />
                <ProfileTitle />
                {/* <Repo /> */}
            </div>
        </>
    )
}

export default ProfileInfo;