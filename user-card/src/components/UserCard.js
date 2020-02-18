import React from 'react';

const UserCard = props => {
 return(
     <div>
         <h2>{props.user.name}</h2>
         <img src={props.user.avatar_url} alt='Profile avatar'/>
         <p>{props.user.bio}</p>
     </div>
 )
}

export default UserCard;