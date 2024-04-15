import React, { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";
import { getService } from "../../API/api";
import CreateInventory from "./CreateInventory";
import InventoryTable from "./InventoryTable";
import "../../App.css";
import EditInventory from "./EditInventory";

const baseURL = "http://localhost:3000";

const InventoryManagement = () => {

  const initialState = { name: "", quantity: 0, image: "" };
  const [inventories, setInventories] = useState([initialState]);
  const [currentInventory, setCurrentInventory] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    retrieveInventories()
  }, [])

  const retrieveInventories = async () => {
    const payload = {
      method: "GET",
      url: `${baseURL}/inventories`,
    };

    try {
      const response = await getService(payload);
      setInventories(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const addInventory = async (inventory) => {
    const payload = {
      method: "POST",
      url: `${baseURL}/inventory`,
      data: inventory,
    };

    try {
      const response = await getService(payload);
      alert(response.data.message);
      retrieveInventories();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const deleteInventory = async (deletingInventoryId) => {
    const payload = {
      method: "DELETE",
      url: `${baseURL}/inventory/${deletingInventoryId}`
    };

    try {
      const response = await getService(payload);
      alert(response.data.message);
      retrieveInventories();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const editRow = (inventory) => {
    setIsEdit(true);
    setCurrentInventory(inventory);
  };

  const editInventory = async (updatedInventory) => {
    setIsEdit(false);
    const inventoryId = updatedInventory._id;
    const payload = {
      method: "PUT",
      url: `${baseURL}/inventory/${inventoryId}`,
      data: updatedInventory,
    };

    try {
      const response = await getService(payload);
      alert(response.data.message);
      retrieveInventories();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <Row className="p-4 ">
        <Col sm={4}></Col>
        <Col sm={4}>
          <h1>Inventory Management</h1>
        </Col>
      </Row>
      {isEdit ? (
        <>
          <Row className="ps-4 mb-2">
            <Col sm={4}>
              <h4>Edit Inventory</h4>
            </Col>
          </Row>
          <Row className="ps-5 pt-2">
            <EditInventory currentInventory={currentInventory} editInventory={editInventory}
              setIsEdit={setIsEdit} />
          </Row>
        </>) : (
        <>
          <Row className="ps-4 mb-2">
            <Col sm={4}>
              <h4>Create Inventories</h4>
            </Col>
          </Row>
          <Row className="ps-5 pt-2">
            <CreateInventory addInventory={addInventory} />
          </Row>
        </>)}

      <Row className="ps-4 mt-5 mb-1">
        <Col sm={4}>
          <h4>Retrieve Inventories</h4>
        </Col>
      </Row>
      <Row className="ps-5">
        <InventoryTable inventories={inventories} deleteRow={deleteInventory} editRow={editRow} />
      </Row>
    </>
  );
};

export default InventoryManagement;