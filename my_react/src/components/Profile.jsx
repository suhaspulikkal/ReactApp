import React from 'react'
import Feed from './Feed'
import Navigationbar from './Navigationbar'
import Rightbar from './Rightbar'
// import Sidebar from './Sidebar'
import "../profile.css"

export default function Profile() {

  return (
    <div>
      <Navigationbar />

      <div className='profileBodyContainer'>

        <div className='ProfileLeft'>
          {/* <Sidebar /> */}
        </div>
        <div className='profileRight'>

          <div className='profileRightTop'>

            <div className='profileCover'>
              <img alt='imgs' className='coverpic' src='assets/frontend.jpg' /> 
              <img alt='imgs' className='profilepic' src='assets/joker.jpg' /> 
            </div>

            <div className='profileInfo'>
              <h4 className='profileInfoName'>Sparky Pulikkal</h4>
              <span className='profileInfoDesc'>I am who I am </span>
            </div>

          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  )
}
