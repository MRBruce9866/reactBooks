import React, {Component} from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Section from '../../components/Section'
import Result from '../../components/Result'
import './style.css'

 class Search extends Component{

    constructor(){
        super()
        
        this.state = {
            searchQuery: ""
        }
    }

    onChange = (event) => {
        this.setState({searchQuery: event.target.value})
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchQuery);
    }





    render(){
        return (
           <Container>
               <Row>
                   <Col col='col-12 text-center my-3 py-5'type='header'>
                       <h1>Google Books Search</h1>
                       <h3>Search for and Save Books of Interest</h3>
                   </Col>
                </Row>
                <Row>
                   <Col col='col-12 my-3 py-3'type='search'>
                    <Form>
                        <h5>Search</h5>
                        <hr/>
                        <Section>
                            <Input type='text' onChange={this.onChange} label='Search for a Book'>{this.state.searchQuery}</Input>
                            <Button type='submit' color='primary' onClick={this.onSubmit}>Submit</Button>
                        </Section>
                    </Form>
                   </Col>
                </Row>
                <Row>
                   <Col col='col-12 my-3 py-3'type='results'>
                        <h5>Results</h5>
                        <hr/>
                        <Result/>
                   </Col>
                </Row>
           </Container>
        )
    }
}
    

export default Search;