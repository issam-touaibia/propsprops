
import './App.css';
import Profile from './profile/Profile';

function App() {

  
  const fullName='Issam Touaibia'
  const bio='  I am a kung fu instructor who love the sport since  I was young and want to progress  in this field for the better via web devoloppment'
  const profession='  web Devoloper'
   const object={color:'red' }
   const alertme=()=>{
    alert('hello ridha')
  }
  return (
 <Profile 

 fullName={fullName }
 bio={bio}
 profession={profession}
 style={object}
  alert={alertme}
  /> 
  );
  
}

export default App;
