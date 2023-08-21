import React from 'react'

const PostDetails =  async({titleId}) => {
    await new Promise((resolve ) =>{
      setTimeout(() => {
       resolve();
      }, 2000);
    })
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${titleId}`, {
        // this for using isg
        next: {
          revalidate: 60
        }
      });
      const res = await data.json();
  return (
    <div  style={{
      width: "70%",
      margin: "auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      color: "#000",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      marginTop :"30px" ,
      borderRadius :"10px" ,
    }}>
    <div style={{fontSize : "20px" , fontWeight : "bold" , border: "1px solid black",padding: "10px"}}> Title is :  {res.title}</div>
    <hr></hr>
    <div style={{fontSize : "20px" , fontWeight : "bold" , border: "1px solid black",padding: "10px" , marginTop : "20px"}}>Body is : {res.body}</div>
    </div>

  )
}

export default PostDetails