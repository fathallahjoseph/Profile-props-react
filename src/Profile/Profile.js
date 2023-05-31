import React from 'react' //import react
import  "../App.css" //import css 
import Picture from './Photo.jpg'; // import my picture to folder profile
import PropTypes from 'prop-types'; // import prop-types to make my types str or num...
//profile function child
const Profile = ({FullName,Profission,Bio,handleName}) => {
  return (
    <div className='div'>
<h2>{FullName}</h2>
<h1>{Profission}</h1>
<image><img className='pic' src={Picture} alt='pic'/></image>
<h3>{Bio}</h3>
<button className='button' onClick={() => handleName(FullName)}>Show Name</button>

    </div>
  )
}
//default profile
Profile.defaultProps = {
    FullName: "trippy",
    Profission:"web-Dev",
    Bio:"new job"
  }
  //profile types
  Profile.propTypes  = {
    FullName: PropTypes.string,
    Profission:PropTypes.string,
    Bio:PropTypes.string,
  };
export default Profile