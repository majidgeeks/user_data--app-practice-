import React, { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";

import ModalForForm from "./Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const ModalForAddUser = ({ onClose, state, addNowButton }) => {
//   // console.log("state", state);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [id, setId] = useState("");

//  const onAddNow = () => {
//     const usersData = {
//         name : name,
//         email : email,
//         phone : phone,
//         id : id
//       };
//       // console.log("usersData",usersData)

//      addNowButton(usersData)
//       setOpen(false)

//  }

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     onClose();

//   };

//   useEffect(() => {
//     // debugger;
//     if (state) {
//       setOpen(true);
//       setName("");
//       setEmail("");
//       setPhone("");
//       setId("");
//     } else {
//       setOpen(false);
//     }
//   }, [state]);

//   return (
//     <div>
//       <ButtonM onClick={handleOpen}>Open modal</ButtonM>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Update User
//           </Typography>

//           <div
//             style={{
//               height: 220,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-evenly",
//             }}
//           >
//             <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//             <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//             <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>
//             <Input value={id} onChange={(e) => setId(e.target.value)} placeholder="Id"/>

//             <Button
//             onClick={()=> {
//               onAddNow()
//             }}
//             >
//               Add Now
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

const AddUsers = ({ getAddedUser }) => {
  const [usersData, setUsersData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const onAddUser = () => {
    setOpenModal(true);
  };

  const addNowButton = (data) => {
    setUsersData(data);
    getAddedUser(data);
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div>
        <h2>Users List </h2>
        <Button className="" onClick={() => onAddUser()}>
          Add Users
        </Button>
        <ModalForForm
          addNowButton={addNowButton}
          onClose={handleClose}
          state={openModal}
        />
      </div>
    </div>
  );
};

export default AddUsers;
