import React from 'react'
import { Users } from '../dummydata'
import Online from './Online'

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className='rightBarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' alt='' src='assets/birthday.png'/>
          <span className='birthdaytext'> 
            <b>John</b> and <b>3 other friends</b> havea birthday today!
          </span>
        </div>

        <img className='rightBarAd' alt='' src='assets/joker.jpg'/>
        
        <div className='onlineFriendsList'>
          <h4 className='rightBarTitle'>Online Friends</h4>
          <ul className='rightBarFriendList'>
          {Users.filter((u)=>(u.online===true)).map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
            
          </ul>
        </div>
        
      </div>

    </div>
  )
}
