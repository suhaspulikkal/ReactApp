import React from 'react'
import {RssFeed} from "@mui/icons-material"
import { Users } from '../dummydata'
import CloseFriends from './CloseFriends'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sideBarWrapper'>
      <ul className='sideBarList'>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      <li className='sideBarListItem'>
        <RssFeed className="sideBarIcon" />
        <span>Feed</span>
      </li>

      </ul>

      <button className='sideBarButton'>Show More</button>
      <hr className='sideBarHr'/>

      <ul className='sideBarList'>
      {Users.map((u)=>(
        <CloseFriends key={u.id} user={u} />
        
      ))}


      </ul>
      </div>
      
    </div>
  )
}
