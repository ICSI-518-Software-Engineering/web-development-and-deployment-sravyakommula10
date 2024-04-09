import React from 'react';

const Profile = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const name = userInfo?.name;
    const email = userInfo?.email;

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
        </div>
    );
};

export default Profile;