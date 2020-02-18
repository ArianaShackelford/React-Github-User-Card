import React from 'react';

const FollowerCard = props => {
 return(
     <div>
         <h4>{props.follower.login}</h4>
         <img src={props.follower.avatar_url} alt='Profile avatar'/>
         <a href={props.follower.html_url}>Github Profile</a>

     </div>
 )
}

export default FollowerCard;