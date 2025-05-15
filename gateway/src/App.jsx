import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [activeIndex, setActivindex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    let newuser = {
      name,
      email,
    };
    console.log(newuser);

    setUsers([...users, newuser]);
    setname("");
    setemail("");
  }

  function handleDelete(index) {
    let newUsers = users.filter((user, idx) => {
      return idx !== index;
    });

    setUsers(newUsers);
  }

  function handleEdit(index) {
    setActivindex(index);
    let editedUser = users[index];
    setname(editedUser.name);
    setemail(editedUser.email);
  }

  function handleUpdate(e) {
    e.preventDefault();

    users[activeIndex].name = name
    users[activeIndex].email = email

    setActivindex(null)
    setemail("")
    setname("")
  }

  return (
    <div>
      <form className="border-2 w-96 p-5 rounded-xl">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Name...."
        />{" "}
        <br /> <br />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email...."
        />{" "}
        <br /> <br />
        {activeIndex === null ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </form>

      <table className="mt-5 w-1/2 border-2">
        <thead>
          <tr>
            <th className="border-2 p-3">S.No.</th>
            <th className="border-2 p-3">Name</th>
            <th className="border-2 p-3">Email</th>
            <th className="border-2 p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td className="border-2 p-3">{index + 1}</td>
              <td className="border-2 p-3">{user.name}</td>
              <td className="border-2 p-3">{user.email}</td>
              <td className="border-2 p-3">
                <span
                  onClick={() => handleDelete(index)}
                  className="text-red-500 underline text-sm cursor-pointer"
                >
                  Delete
                </span>
                <span
                  onClick={() => handleEdit(index)}
                  className="text-blue-700 underline text-sm cursor-pointer ml-4"
                >
                  Edit
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
