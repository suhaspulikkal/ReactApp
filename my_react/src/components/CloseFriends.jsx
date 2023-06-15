import React from 'react'

export default function CloseFriends(props) {
  
  return (
    <div>
      <li className='sideBarListItem'>
          <img className="profilePicture" src={props.user.profilePicture} alt='friendpic'/>
          <span className='sideBarFriendName'>{props.user.username}</span>
         </li>
    </div>
  )
}
