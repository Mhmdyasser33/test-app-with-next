import React from 'react'

const page = (props) => {
    // this props contain a params that store a dynamic value that user write
    console.log(props)
    // to print this value written by user

  return (
    <div>
     <h1>
     you write fatal url..! , you will find me
     </h1>
     <h2>
     {props?.params.dynamic}
     </h2>
     </div>
  )
}

export default page