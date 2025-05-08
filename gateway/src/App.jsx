import React, { useState } from "react";

const App = () => {
  const [isOpen, setisOpen] = useState(false);

  const togleHaandler = () => {
    setisOpen(!isOpen)
  };

  return (
    <div className="h-[100vh] relative w-full flex items-center justify-center flex-col px-10 gap-10">
      <button
        onClick={togleHaandler}
        className="py-2 px-4 bg-purple-500 text-white rounded-xl cursor-pointer active:scale-95 transition-transform duration-200"
      >
        Togle Details
      </button>

      <div
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          molestias et consectetur veniam odit laudantium culpa vel sit voluptas
          molestiae odio dolores rerum asperiores suscipit, esse quas, optio
          ullam perferendis exercitationem expedita reiciendis officiis quod
          ipsa! Expedita porro dolorem nam architecto dignissimos incidunt
          praesentium animi, delectus unde, perspiciatis libero dolores fugit
          odio quibusdam aliquam! Quis eligendi delectus, numquam laboriosam
          reprehenderit mollitia rem animi ipsa molestiae, sapiente libero nulla
          molestias itaque neque expedita esse tempora debitis impedit illo
          vero. Quia dicta quo perferendis aperiam sequi doloribus. Vitae
          exercitationem quibusdam voluptatem voluptatibus tempora unde sequi
          consequatur a. At est quos minus consequuntur.
        </p>
      </div>
    </div>
  );
};

export default App;
