import Link from 'next/link';
import React from 'react';

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // this for using isg
    next: {
      revalidate: 60
    }
  });
  const res = await data.json();
  console.log(res);
  return (

    <div
      style={{
        width: "70%",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        color: "#000",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        marginTop :"30px" ,
        borderRadius :"10px" ,
      }}
    >
      <h1 style={{ fontSize: "24px" }}>Posts</h1>
      <div>
        {res.map((item, index) => (
          <Link href={`/titles/${item.id}`}>
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#f7f7f7",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.title}</h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{item.body}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;