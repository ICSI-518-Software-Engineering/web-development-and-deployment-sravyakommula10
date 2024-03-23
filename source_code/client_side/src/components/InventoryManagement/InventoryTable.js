import React from "react";
import { Row, Col } from "react-bootstrap";


const InventoryTable = ({ inventories, deleteRow, editRow }) => {
  return (
    <>
      <Row className="mt-4 ms-4">
        <Col sm={1}></Col>
        <Col sm={9}>
          <table className="table table-bordered table-sm text-center">
            <thead className="mb-3">
              <tr className="tableHeading">
                <th className="p-3 tableHeading">Image </th>
                <th className="p-3 tableHeading">Name </th>
                <th className="p-3 tableHeading">Quantity </th>
                <th className="p-3 tableHeading">Actions </th>
              </tr>
            </thead>
            <tbody>
              {inventories.length ? (
                inventories.map((inventory, index) => (
                  <tr key={index}>
                    <td className="p-3"> <img src={inventory.image} width="40" height="40" alt="inventoryItem" /> </td>
                    <td className="p-3">{inventory.name}</td>
                    <td className="p-3">{inventory.quantity}</td>

                    <td className="p-3">

                      <span className="material-icons actionIcon " onClick={() => editRow(inventory)}>edit</span>
                      <span className="material-icons actionIcon ms-4" onClick={() => deleteRow(inventory._id)}>delete</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No Inventories</td>
                </tr>
              )}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};

export default InventoryTable;
