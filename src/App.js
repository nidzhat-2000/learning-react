import Navbar from "./Navbar";
import Home from "./Home";

const App = ()=> {

  const title = 'App Component'
  // const likes = 50
  // // const person = {name: "nijat", age: 22}
  // const link = "http://www.google.com"

  return (
    <div className="App">
        <Navbar/>
      <div className="content">
        <Home/>
        {/* <Online/> */}
        
         {/* <h1>{title}</h1> */}
        {/*<p> {likes} liked times</p> */}
        {/* <p> {person.name} has {person.age} ages</p> */}
        {/* <p> {'hello ninjas'}</p>
        <p> {[1,2,3,4]}</p>
        <p> {Math.random()*10} </p> */}
        {/* All written in {} turns value into string */}

        {/* <a href={link}>Google Site</a> */}
        
      </div>
    </div>
  );
}

export default App;
