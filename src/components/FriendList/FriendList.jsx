import React from "react";
import Profile from "../Profile/Profile";
import { useProfileList } from '../../hooks/useProfileList';

const FriendList = () => {

    const { profiles } = useProfileList()

	return (
		<div className='friend-list'>
			<h3 className='title-friends'>Amigos</h3>
			<div className="sel">
                { profiles && (
                    profiles.map(profile => {
                        return (
                            <Profile key={profile.name} profileData={profile} />
                        )
                    })
                ) }
			</div>

			<button className="agregar">Ver todos tus Contactos</button>
		</div>
	);
};

export default FriendList;
