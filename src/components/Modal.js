import React, { useState, useEffect } from "react";
import ButtonM from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Input } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalForForm = ({
  onClose,
  addNowButton,
  modalForUpdate,
  dataForUpdate,
  state,
  gotUpdatedData,
}) => {
  // console.log("state", state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const onAddNow = () => {
    const usersData = {
      name: name,
      email: email,
      phone: phone,
      id: id,
    };
    // console.log("usersData",usersData)

    addNowButton(usersData);
    setOpen(false);
  };

  const updateNowBtn = () => {
    const updatedData = {
      name: name,
      email: email,
      phone: phone,
    };
    // console.log("updatedData",updatedData);
    gotUpdatedData(updatedData);
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    // debugger;
    if (state) {
      setOpen(true);
    } else if (modalForUpdate) {
      setOpen(true);
      setName(dataForUpdate.name);
      setEmail(dataForUpdate.email);
      setPhone(dataForUpdate.phone);
      setId(dataForUpdate.id);
    } else {
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setId("");
    }
  }, [state, modalForUpdate, dataForUpdate]);

  return (
    <div>
      <ButtonM style={{ display: "none" }} onClick={handleOpen}>
        Open modal
      </ButtonM>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {state
              ? "Fill the form to add user"
              : "Fill the form to update user"}
          </Typography>
          <div
            style={{
              height: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
              <Input
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Id"
                disabled={state ? false : true}
              />
            <Button
              onClick={() => {
                if (state) {
                  onAddNow();
                } else {
                  updateNowBtn();
                }
              }}
            >
              {state ? "Add Now" : "Update Now"}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForForm;
