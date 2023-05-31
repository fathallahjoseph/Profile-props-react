
import './App.css'; //import css
import Profile from './Profile/Profile'; //import profile
import Picture from './Profile/Photo.jpg'; // import my picture to folder profile
//function to make props and function handlename to return alert
function App() {
  function handleName(FullName) {
    alert(`Profile user's name is ${FullName}`);
  }
  const FullName="Youssef Fathallah" 
  const Bio="A new life a new opportunity new aspirations and God willing I will fulfill all my dreams I am back"
  const  Profission="Web-Developer"
  return (
    <div className="App">
    <Profile handleName={handleName} Profission={Profission} FullName={FullName} Bio={Bio} ><img className='pic' src={Picture} alt='pic'/></Profile>
  
    
    </div>
  );
}


export default App;
