import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import {addTodo} from "../redux/actions/todo"
import { connect } from 'react-redux'
import { v4 } from 'uuid'
const AddTodo = ({addTodo}) => {
    const [item,setitem] = useState({
        'title':'',
        'description':'',
        'id':''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({...item,id:v4()})
        setitem({
            title:'',
            description:''
        })
    }
  return (
    <Container>
        <Row>
            <Col md={12}>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>Add Todo Here</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>
                                    Todo Title
                                </Form.Label>
                                <Form.Control type='text' value={item.title} onChange={e=>setitem({...item,title:e.target.value})} placeholder='enter title'></Form.Control>
                            </Form.Group>
                            <Form.Group className='mt-3'>
                                <Form.Label>
                                    Todo Description
                                </Form.Label>
                                <Form.Control as={'textarea'} value={item.description}
                                onChange={e=>setitem({...item,description:e.target.value})} type='text' placeholder='enter description'></Form.Control>
                            </Form.Group>
                            <Container className='text-center mt-3'>
                                <Button type='submit' variant='primary'>
                                    ADD Todo
                                </Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps = (state) =>({})

const mapDispatchToProps =(dispatch)=>({
    addTodo:(item)=>(dispatch(addTodo(item)))
})

export default connect(mapStateToProps,mapDispatchToProps) (AddTodo)
