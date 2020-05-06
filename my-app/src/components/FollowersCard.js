import React, { useState } from 'react';
import axios from 'axios';
import './UserCard.css';

function FollowersCard(props){
    const[follower, setFollower] = useState([]);

    const handleFollowers = e => {
        e.preventDefault();
        axios
            .get('https://api.github.com/users/vailspencer/followers`')
            .then(res => {
                setFollower(res.data);
                console.log('Followers', 'follower');
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div>
            <button onClick ={handleFollowers}>
                Followers
            </button>
            {console.log('follwers return', follower)}
            {follower.map(item => (
                <div>
                    <div>
                        <img src={item.avatar_url} alt='user avatar' />
                        <h4>{item.login}</h4>
                        <p>{item.location}</p>
                    </div>
                </div>
            ))}
        </div>

    )
};

export default FollowersCard