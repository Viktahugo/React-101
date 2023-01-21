import './App.css';
import {useState,useEffect} from 'react' //This Imports the useState Hook from react
                              // Hook begins with keyword use

// New React Componet
const Person = (props) => {
   return(
    <>
    <h1> Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
   );
}

const ShowButton =() =>{
  const [Counter,setCounter] = useState(0); 
   useEffect(()=> {
       setCounter(100)
  },[]);   

  return(
    <>
    <button onClick={()=>setCounter((prevCount)=>prevCount -1)}>-</button>
    <h1>{Counter}</h1>
    <button onClick ={()=>setCounter((prevCount)=>prevCount + 1)}>+</button>     
    </>
  );
}

// Default Page Componet
const App = () => {
  const name = "NewBie"
  const isNameShowing=true 

  return (
    <div className="App">
          <h1> Hello, {isNameShowing ? name : "Pro"}  </h1>

          <h2>Welcome to REACT</h2>
        <Person name={'Leandro'} lastName={'Trossard'} age={'26 Years'}/> {/*}This calls the React Componet named Person  {*/}
        <Person name ={'John'} lastName={'Doe'} age={'30 years'}/>
        <ShowButton />
    </div>
  );
}

export default App;
