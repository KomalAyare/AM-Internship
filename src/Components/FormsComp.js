import React from 'react';
import Formcomp from '../StyleComp/Formcomp.css';
import {Form, Button, Container, Row, Col, Figure, Image} from 'react-bootstrap';
import EditorComp from './EditorComp';

function FormsComp() {
  return (
    <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId='filename'>
                            <Form.Label>File Name <span>(English)*</span>:</Form.Label>
                            <Form.Control type="text" placeholder="Enter file name" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='submitby'>
                            <Form.Label>Submitted By <span>*</span>:</Form.Label>
                            <Form.Select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option default>Select Provider Name</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='reportedby'>
                            <Form.Label>Reported By:</Form.Label>
                            <Form.Control type='text' placeholder='Reported by'/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3' controlId='Place'>
                            <Form.Label>Place <span>*</span>:</Form.Label>
                            <Form.Control type='text' placeholder='Reported by'/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='Hometitle'>
                        <Form.Label>Home Title <span>*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Home Title" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='Mobiletitle'>
                        <Form.Label>Mobile Title <span>(+ UC Browser : 70 Characters)*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile Title" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='Articletitle'>
                        <Form.Label>Article Title <span>*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Article Title" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='Metatitle'>
                        <Form.Label>Meta Title <span>(Hindi + English)*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Meta Title" />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='topicpagekey'>
                        <Form.Label>Topic Page Keywords <span>(Only English, Hindi, Alpha-numeric)*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Tags"/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3" controlId='metakey'>
                        <Form.Label>Meta Keywords <span>(5-10 Keywords in English)*</span>:</Form.Label>
                        <Form.Control as="textarea" row={3} placeholder="Enter Meta Keywords"/>
                    </Form.Group>
                </Row>

                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId='filekey'>
                        <Form.Label>Images <span>(w x h: 1280x720)*</span>:</Form.Label>
                        <Form.Control type='file' multiple accept=".png,.jpg,.jpeg,.webp" width={1280} height={720}/>
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group className="mb-3" controlId='imgaltkey'>
                        <Form.Label>Image Alt Tag <span>*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Alt Tag"/>
                    </Form.Group>
                    </Col>

                    <Col>
                    <Form.Group className="mb-3" controlId='imgcapkey'>
                        <Form.Label>Image Caption <span>*</span>:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Caption"/>
                    </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId='vidpathkey'>
                        <Form.Label>Video Path <span>*</span>:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    </Col>
                    
                    <Col>
                    <Form.Group className="mb-3" controlId='photocrekey'>
                        <Form.Label>Photo Credit <span>*</span>:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    </Col>
                </Row>

                <Row>
                <Form.Group className="mb-3" controlId='catkey'>
                        <Form.Label>Category: <span>*</span>:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </Row>


                <Row>
                    <Col>
                        <Form.Label>Type <span>*</span>:</Form.Label>
                    </Col>
                    {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">

                        <Form.Check
                            inline
                            label="Article"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />


                        <Form.Check
                            inline
                            label="Photo Feature"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                      
                        <Form.Check
                            inline
                            label="Live Blog"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                       
                        <Form.Check
                            inline
                            label="Listicle Article"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />

                    </div>
                    ))}
                </Row>

                <Row>
                    <EditorComp/>
                </Row>

                <div className="text-center">
                    <Button as="input" type="submit" value="Submit" size="lg" variant="success"/>
                </div>
            </Container>
        </div>
  )
}

export default FormsComp;