import React, { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";

const EditInventory = ({ editInventory, currentInventory, setIsEdit }) => {
    const [inventoryItem, setInventoryItem] = useState(currentInventory);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInventoryItem({
            ...inventoryItem,
            [name]: value
        })
    }

    const handleEditInventory = (e) => {
        e.preventDefault();
        editInventory(inventoryItem);
    };


    return (
        <>

            <Form>
                <Row>
                    <Col sm={6}>
                        <Form.Group as={Row} className="mb-4">
                            <Col sm={3}>
                                <Form.Label className="mt-1">
                                    Name
                                </Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    value={inventoryItem.name}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group as={Row} className="mb-4">
                            <Col sm={3}>
                                <Form.Label className="mt-1">
                                    Quantity
                                </Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control
                                    type="number"
                                    name="quantity"
                                    placeholder="Enter your quantity"
                                    min={1}
                                    required
                                    value={inventoryItem.quantity}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group as={Row} controlId="formFile" className="mb-4">
                            <Col sm={3}>
                                <Form.Label >
                                    Upload Image
                                </Form.Label>
                            </Col>
                            <Col sm={8}>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    disabled
                                />
                            </Col>
                        </Form.Group>
                    </Col>


                    {inventoryItem.image === null || inventoryItem.image === "" ? ("") : (
                        <Col sm={6}>
                            <Form.Group as={Row} controlId="formFile" className="mb-4">
                                <Col sm={3}>
                                    <Form.Label >
                                        Uploaded Image
                                    </Form.Label>
                                </Col>
                                <Col sm={8}>
                                    <img src={inventoryItem.image} alt="Preview" width="80"
                                        height="80" />
                                </Col>
                            </Form.Group>
                        </Col>
                    )}
                </Row>
                <Row className="mt-5">
                    <Col sm="4"><Button variant="secondary" onClick={handleEditInventory}>
                        Update Inventory
                    </Button></Col>
                    <Col sm="4"></Col>
                    <Col sm="4"> <Button variant="danger" onClick={() => setIsEdit(false)}>
                        Cancel Inventory
                    </Button></Col>
                </Row>
            </Form>

        </>
    )
}

export default EditInventory;