import React from 'react'
const page =  async() => {
 // this is how to use fetch in server component , here it did not need useEffect to fetch data
  /* const result = await fetch("https://jsonplaceholder.typicode.com/todos/1") ;
  const todo =  await result.json() ; */
  return (
    <div className='about-container'>
    <h1>
   welcome to about page
       </h1>
      {/*  <h2>{todo.title}</h2> */}

    </div>
  )
}

export default page