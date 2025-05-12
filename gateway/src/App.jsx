import React from "react";

const App = () => {
  let cardData = [
    {
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Akshay Dangi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur distinctio voluptatibus deserunt.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Naman Dangi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur distinctio voluptatibus deserunt.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Naman Dangi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur distinctio voluptatibus deserunt.",
    },
  ];

  console.log(cardData);

  return (
    <main>
      {cardData.map((data, index) => (
        <div key={index} className="card">
          <img src={data.img} alt="" />
          <h1>{data.name}</h1>
          <p>{data.desc}</p>
        </div>
      ))}
    </main>
  );
};

export default App;
