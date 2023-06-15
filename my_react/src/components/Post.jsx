import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import { Users } from '../dummydata';

export default function Post({post}) {

    const [like,setLike] = useState(post.like);
    const [isLiked,setisLiked] = useState(false);

  
    const likeHandler =()=>{
      setLike(isLiked ? like-1 : like+1)
      setisLiked(!isLiked)
    };
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='profilePicture' alt='profilepic' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture }/>
            <span className='postUserName'>{Users.filter((u)=> u.id===post.userId)[0].username}</span>
            <span className='postTime'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImage' alt='' src={'assets/' + post.photo}/>
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcons' alt='' src='assets/like.png' onClick={likeHandler}/>
            <img className='likeIcons' alt='' src='assets/heart.png' onClick={likeHandler} />
            <span className='postLikeCounter'>{like} people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'> {post.comments} comments</span>
          </div>
        </div>

      </div>
      
    </div>
  )
}
