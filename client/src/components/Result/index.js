import React from 'react'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Section from '../../components/Section'
import Button from '../../components/Button'
import './style.css'

function Result(props){
    return (
        <Section >
            <div className="indexToken">{props.index + 1}</div>
            <Row>
                <Col col='col-12 col-md-6 my-3 text-center text-md-left'>
                    <h2>{props.title}</h2>
                    <h4>{props.authors}</h4>
                </Col>
                <Col col='col-12 col-md-6 my-3 text-center text-md-right'>
                    <a href={props.link}><Button type='button' color='primary'>View</Button></a>
                    <Button index={props.index} type='button' color='success' onClick={props.clickHandler}>{props.buttonText}</Button>
                </Col>
                <Col col='col-12 col-md-3 text-center text-md-left'>
                    <img src={props.image}/>
                </Col>
                <Col col='col-12 col-md-9 text-center text-md-left'>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Section>
    )
}

export default Result;