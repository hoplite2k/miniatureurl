import React, { useState, useEffect, useRef } from 'react';
import { Jumbotron, Container, Row, Form, Button, Col, Card, Popover, OverlayTrigger } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { geturl } from '../actions/urlaction';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Loader from './loadercomponent';
import Message from './messagecomponent';

const Main = () => {

    const dispatch = useDispatch();
    const target = useRef(null);

    const getshorturl = useSelector((state) => state.getshorturl);
    const { loading, error, url } = getshorturl;

    const [longurl, setlongurl] = useState('');
    const [shorturl, setshorturl] = useState('');
    const [show, setshow] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(geturl({ longurl }));
    }

    useEffect(() => {
        if (url) {
            setshorturl(url.shorturl);
            setshow(true);
        } else {
            setshow(false);
        }
    }, [url]);

    const copied = (
        <Popover id="copy">
            <Popover.Content>Copied to Clipboard</Popover.Content>
        </Popover>
    );

    return (
        <>
            <Jumbotron fluid style={{ backgroundColor: 'honeydew' }}>
                <Container>
                    <h1 style={{ fontFamily: 'times new roman' }}>URL SHORTNER</h1>
                    <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                </Container>
            </Jumbotron>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col>

                        <Card className="my-4" bg="light">
                            <h1 style={{ textAlign: 'center' }}>Enter URL</h1>
                            <Card.Body>
                                <Col>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Row className="justify-content-md-center">
                                            <Col xs={10}>
                                                <Form.Group controlId='longurl'>
                                                    <Form.Control type='text' placeholder='Enter URL' value={longurl} onChange={(e) => setlongurl(e.target.value)}></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <center><Button type='submit' variant='primary'>Shorten</Button></center>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                    <br />
                                    {
                                        loading ? <Loader /> : error ? <Message variant='danger'>{error.statusText ? `Error ${error.status}: ${error.statusText}, ${error.data}` : error}</Message> :
                                            show && (
                                                <Form>
                                                    <Form.Row>
                                                        <Col xs={10}>
                                                            <Form.Group controlId='shorturl'>
                                                                <Form.Control type='text' placeholder='Short URL' value={shorturl}></Form.Control>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <center>
                                                                <CopyToClipboard text={shorturl}>
                                                                    <OverlayTrigger trigger="click" placement="top" overlay={copied}>
                                                                        <Button variant='danger' ref={target}>Copy</Button>
                                                                    </OverlayTrigger>
                                                                </CopyToClipboard>
                                                            </center>
                                                        </Col>
                                                    </Form.Row>
                                                </Form>)
                                    }
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Main;
