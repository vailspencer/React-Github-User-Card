import React from 'react';
import './UserCard.css';

function UserCard (props) {
    return (
        <div className = 'card'>
            <div className = 'left'>
                <img className = 'img' src={props.avatar} alt= 'user avatar' />
                <h4>{props.name}</h4>
                <p>{props.location}</p>
                <p>{props.bio}</p>
                <p>Repos: {props.public_repos}</p>
            </div>

        </div>
    )
}

export default UserCard