import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ModalForForm from "./Modal";

const DisplayUsers = ({ users, onDeleteBtn, onUpdateBtn, dataForUpdate, gotUpdatedData }) => {
  const [modalForUpdate, setModalForUpdate] = useState(false);
  console.log("users in display user", users);

  const getIdForDelete = (id) => {
    console.log("id for delete", id);
    //sending id to app.js
    onDeleteBtn(id);
  };

  const onUpdateBtnClick = (id) => {
    onUpdateBtn(id);
    setModalForUpdate(true);
  };

  const handleClose = () => {
    setModalForUpdate(false);
  };

  return (
    <>
      <ModalForForm 
        gotUpdatedData={gotUpdatedData}
        onClose={handleClose}
        dataForUpdate={dataForUpdate}
        modalForUpdate={modalForUpdate}
        onUpdateBtn = {onUpdateBtn}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHONE</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.id}</TableCell>
                <TableCell
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => getIdForDelete(data.id)}
                  >
                    delete
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => onUpdateBtnClick(data.id)}
                  >
                    update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contaied"
          style={{ background: "red", color: "white" }}
        >
          Delete All User
        </Button>
      </div>
    </>
  );
};

export default DisplayUsers;
