import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])


  // let name = 'Mario';
  // const [name, setName] =  useState('mario')
  // const [age, setAge] =  useState(32)

  // const handleClick = (e) => {
  //   console.log("Hello Ninjas");
  // };

  // const handleClick = () => {
  //   setName('Nijat')
  //   setAge(30)
  // };

  // const handleClickAgain = (name, e) => {
  //   console.log("Hello " + name, e);
  // };

  return (
    <div className="home">

      {blogs.map(blog=> (
      <div className="blog-preview" key={blog.id} > 
        <h2>{blog.title}</h2>
        <p> Written by {blog.author} </p> 
      </div> 
      ))}

      {/* <h2>Homepage</h2> */}

      {/* <p> {name} is {age} years old</p> */}

      {/* <button onClick={handleClick}>Click me</button> */}

      {/* <button
        onClick={(e) => {
          // if you don't want it to fire immediately you need it to not show reference but call within anonymus ()=> {} function
          handleClickAgain("Nici", e);
        }}
      > 
        Click me again
      </button> */}
    </div>
  );
};

export default Home;
