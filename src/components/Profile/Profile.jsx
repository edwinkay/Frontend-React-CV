import React from 'react'

const Profile = ({ profileData }) => {
    return (
        <div className="profile-container">
            <img className="perfil" src={profileData.image} alt="perfil" />
            <p htmlFor="">{profileData.name}</p>
        </div>
    )
}

export default Profile