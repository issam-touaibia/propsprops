import React from 'react'
import HandleName from './HandleName'
import PropTypes from 'prop-types'; 
const Profile = ({fullName, bio, profession,style,alert}) => {
  const colorise ={color:"blue"}
  

 
  return (
    <div  className='profile' >
  <div className='name' >
    
     <h1 style={style}><i>{fullName} </i></h1> 
  </div>
  <div className='profession'>
     <h2 style={colorise}> { profession}</h2>
  </div> 
   <div> {alert()} </div>
   
<HandleName/>
 <h3 className='bio'>{bio}</h3>
    </div>
  )
}
Profile.propTypes={fullName:PropTypes.string,bio:PropTypes.string,profession:PropTypes.string}
Profile.defaultProps={fullName:"No Name",bio :"no bio ",profession:"no profession" }
export default Profile