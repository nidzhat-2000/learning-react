// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetchData from './useFetch';

const Home = () => {
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

  /*
  useEffect(()=> {
    document.title = `You clicked ${example} times`
  })

  const [age, stateAge] = useState(22);
  const [example, stateExample] = useState(22);
  const [currentYear, stateCurrentYear] = useState(2022);
  // const [name, setName] = useState('mario')
  // const [lagn, setLang] = useState('my name is')
*/

  // const [blogs, setBlogs] = useState(null)
  // const [isPending, setIsPending] = useState(true)
  // const [error, setError] = useState(null)

  // const handleDelete = id => {
  //   const newBlogs = blogs.filter(eachBlog=> eachBlog.id !== id)
  //   setBlogs(newBlogs)
  // }

  // useEffect(()=> {
  // console.log('use effect')
  // console.log('your name and language has changed')
  // }, [name && lagn])
  // this array means we want this useEffect fire when variable within array is changed

  // useEffect(()=> {

  //   setTimeout(()=> {
  //   fetch("http://localhost:8000/blogs")
  //   .then(response=> {
  //     // console.log(response)
  //     if (!response.ok) { throw new Error ('unf could not fetch data for that response')}
  //     return response.json()
  //   })
  //   .then(data=> {
  //     // console.log(data)
  //     setBlogs(data)
  //     setIsPending(false)
  //     // initially this is true and we set it to false as soon as data is fetched
  //     setError(null)
  //   })
  //   .catch (err=> {
  //     // console.log(err.message)
  //     setIsPending(false)
  //     setError(err.message)
  //   })

  //   },100)
  // }, [])

  // useState(()=> {
  //   console.log('use state')
  // })

  const { data, isPending, error } = useFetchData(
    'http://localhost:8000/blogs'
  );

  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div>Loading...</div>}
      {/* when both of them true show Loading as soon as data is loaded then isPending will be false and it won't appear anymore */}

      {data && <BlogList blogs={data} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((eachBlog)=> eachBlog.author=== 'mario')} title='Mario"s blogs' handleDelete = {handleDelete}/> */}

      {/* <p> {lagn} {name}</p>
    <button onClick={()=> {
      // setLang('Menim adim')
       setName('Nicatdir')
      }}>change above</button> */}

      {/* <p> Nijat has now {age} years</p>
      <p>
        In {currentYear} year it will be {example}{' '}
      </p>

      <button
        onClick={() => {
          stateCurrentYear(currentYear + 1);
          stateExample(example + 1);
        }}
      >
        CLICK HERE!
      </button> */}

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
