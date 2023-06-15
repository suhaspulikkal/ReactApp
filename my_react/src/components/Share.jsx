import { AddReaction, FmdGood, LocalOffer, PhotoSizeSelectActual } from '@mui/icons-material'
import React from 'react'

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
      <div className='shareTop'>
        <img className='profilePicture' alt="" src='assets/joker.jpg'/>
        <input className='shareInput' placeholder="What's in your mind?"/>
      </div>
      <hr className='sideBarHr'/>

      <div className='shareBottom'>
        <ul className='shareList'>
          <li className='shareListItem'>
          <PhotoSizeSelectActual className='shareListItemicon' htmlColor='red'/>
          <span className='shareListItemiconText'>Photo or Video</span>
          </li>
          <li className='shareListItem'> 
          <LocalOffer className='shareListItemicon' htmlColor='blue'/>
          <span className="shareListItemiconText">Tag</span>
          </li>
          <li className='shareListItem'> 
          <FmdGood className='shareListItemicon' htmlColor='green'/>
          <span className="shareListItemiconText">Location</span>
          </li>
          <li className='shareListItem'>
          <AddReaction className='shareListItemicon' htmlColor='goldenrod'/>
          <span className="shareListItemiconText">Feelings</span>
          </li>
        </ul>
        <button className='shareButton'>Share</button>
      </div>
      </div> 
    </div>
  )
}
