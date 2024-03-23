import React, { useState, useRef } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";

const CreateInventory = ({ addInventory }) => {
    const initialFormState = { name: "", quantity: 0, image: null };

    const [inventoryItem, setInventoryItem] = useState(initialFormState);
    const [imagePreview, setImagePreview] = useState(null);
    const logoRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInventoryItem({
            ...inventoryItem,
            [name]: value
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setInventoryItem({
                ...inventoryItem,
                image: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleAddInventory = (e) => {
        e.preventDefault();
        logoRef.current.value = null;
        addInventory(inventoryItem);
        setInventoryItem(initialFormState);
        setImagePreview(null);
    };

    return (
        <>

            <Form onSubmit={handleAddInventory}>
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
                                    onChange={handleImageChange}
                                    ref={logoRef}
                                    required
                                />
                            </Col>
                        </Form.Group>
                    </Col>

                    {imagePreview && (
                        <Col sm={6}>
                            <Form.Group as={Row} controlId="formFile" className="mb-4">
                                <Col sm={3}>
                                    <Form.Label >
                                        Uploaded Image
                                    </Form.Label>
                                </Col>
                                <Col sm={8}>
                                    <img src={imagePreview} alt="Preview" width="80"
                                        height="80" />
                                </Col>
                            </Form.Group>
                        </Col>
                    )}
                </Row>
                <Button type="submit" variant="secondary" className="mt-2">
                    Add Inventory
                </Button>
            </Form>

        </>
    )
}

export default CreateInventory;