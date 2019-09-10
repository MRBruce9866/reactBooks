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
                    <h4>{props.subTitle}</h4>
                    <p>{props.authors}</p>
                </Col>
                <Col col='col-6 m-0 p-0 text-right'>
                    <Button type='button' color='primary' onClick={props.viewClicked}>View</Button>
                    <Button type='button' color='success' onClick={props.savedClicked}>Save</Button>
                </Col>
            </Row>
            <Row>
                <Col col='col-3 m-0 p-0 text-left'>
                    <img src={props.image}/>
                </Col>
                <Col col='col-9 m-0 p-0 text-right'>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Section>
    )
}

export default Result;