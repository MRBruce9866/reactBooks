import React from 'react'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Section from '../../components/Section'
import Button from '../../components/Button'

function Result(props){
    return (
        <Section >
            <Row>
                <Col col='col-6 m-0 p-0 text-left'>
                    <h2>{props.title}</h2>
                    <h4>{props.authors}</h4>
                </Col>
                <Col col='col-6 m-0 p-0 text-right'>
                    <a href={props.link}><Button type='button' color='primary'>View</Button></a>
                    <Button index={props.index} type='button' color='success' onClick={props.clickHandler}>{props.buttonText}</Button>
                </Col>
            </Row>
            <Row>
                <Col col='col-2 m-0 p-0 text-center'>
                    <img src={props.image}/>
                </Col>
                <Col col='col-10 m-0 p-0 text-left'>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Section>
    )
}

export default Result;