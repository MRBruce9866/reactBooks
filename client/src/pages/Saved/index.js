import React, {Component} from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Result from '../../components/Result'
import API from '../../utils/API'

import './style.css'

 class Saved extends Component{

    constructor(){
        super()
        
        this.state = {
            booksSaved: []
        }
    }

    componentDidMount(){
        API.getBooks().then((response)=>{
            this.setState({booksSaved: response.data})
        })
    }

    handleRemove = (event) =>{
        const index = parseInt(event.target.getAttribute('data-index'))
        const book = this.state.booksSaved[index];

        API.deleteBook(book._id).then((response)=>{
            this.setState({booksSaved: this.state.booksSaved.filter((val, i)=>{
                return i !== index;
            })})
        });
    }

    

    render(){

        console.log(this.state.booksSaved);

        let results;
        if(this.state.booksSaved.length > 0){
            results = this.state.booksSaved.map((result, index)=>{
                return <Result 
                index = {index}
                clickHandler={this.handleRemove}
                buttonText = 'Remove'
                title={result.title} 
                authors={result.authors.join(', ')} 
                link={result.link} 
                image={result.image} 
                description={result.description}/>
            })
        }else{
            results = <h1>Search for a book to get results</h1>
        }

        return (
            <Container>
                <Row>
                    <Col col='col-12 my-3 py-3'type='results'>
                        <h5>Saved</h5>
                        <hr/>
                        {results}
                    </Col>
                </Row>
            </Container>
        )
    }
}
    

export default Saved;