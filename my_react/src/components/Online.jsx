import React from 'react'

export default function Online(props) {

  return (
    <div>
      <li className='rightBarFriend'>
              <div className='rightbarProfileImgContainer'>
                <img alt='' className='rightbarProfileImg' src={props.user.profilePicture}/>
                <span className='rightBarOnline'></span>
              </div>
              <span className='rightBarUsername'>{props.user.username}</span>
            </li>
    </div>
  )
}
