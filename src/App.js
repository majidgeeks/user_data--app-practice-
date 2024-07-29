import { useState } from "react";
import "./App.css";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [dataForUpdate, setDataForUpdate] = useState(null);
  const [idForUpdate, setIdForUpdate] = useState('');

  const getAddedUser = (data) => {
    console.log("data in app.js", data);
    users.push(data);
    setUsers([...users]);
  };

  //when clicks on delete btn in display users
  const onDeleteBtn = (gotId) => {
    console.log("getting id from display to app.js for delete", gotId);
    const findByIndex = users.findIndex((item) => item.id === gotId);
    users.splice(findByIndex, 1);
    setUsers([...users]);
  };

  const onUpdateBtn = (id) => {
    setIdForUpdate(id)
    console.log("get id from display to app.js for update", id);
    const dataFindById = users.find((item) => item.id === id);
    setDataForUpdate(dataFindById);
    
  };

  const gotUpdatedData = (data) => {
    debugger;
    console.log("data updated from update modal to app.js", data);
    const userIndex = users.findIndex((item) => item.id === idForUpdate)
    users[userIndex] = data;
    setUsers([...users])
    // console.log("users.find((item) => item.id === idForUpdate )",users.find((item) => item.id === idForUpdate ))
    // setUsers(users.find((item) => item.id === idForUpdate ))
  };

  console.log("users data in app.js", users);

  return (
    <>
      <AddUsers getAddedUser={getAddedUser} />

      <DisplayUsers
        gotUpdatedData={gotUpdatedData}
        dataForUpdate={dataForUpdate}
        users={users}
        onDeleteBtn={onDeleteBtn}
        onUpdateBtn={onUpdateBtn}
      />
    </>
  );
}

export default App;
