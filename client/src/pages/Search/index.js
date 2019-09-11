import React, {Component} from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Section from '../../components/Section'
import Result from '../../components/Result'
import API from '../../utils/API'
import './style.css'

 class Search extends Component{

    constructor(){
        super()
        
        this.state = {
            searchQuery: "",
            results: []
        }
    }

    
    onChange = (event) => {
        this.setState({searchQuery: event.target.value})
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        API.getGoogleBooks(this.state.searchQuery).then((response)=>{
            this.setState({results: response.data.items});
        });
        
    }
    
    handleSave = (event) => {
        const bookRaw = this.state.results[parseInt(event.target.getAttribute('data-index'))];
        console.log(bookRaw);
        const book = {
            title: bookRaw.volumeInfo.title,
            authors: bookRaw.volumeInfo.authors,
            link: bookRaw.volumeInfo.canonicalVolumeLink,
            image: 'imageLinks' in bookRaw.volumeInfo ? bookRaw.volumeInfo.imageLinks.thumbnail : '',
            description: bookRaw.volumeInfo.description || 'No Description'
        }
        API.saveBook(book);
        this.setState({results: this.state.results.filter((result, i)=>{ return i !== parseInt(event.target.getAttribute('data-index'))})})
    }

    render(){

        let results;
        if(this.state.results.length > 0){
            results = this.state.results.map((result, index)=>{
                const data = result.volumeInfo;
                return <Result 
                index = {index}
                clickHandler={this.handleSave}
                buttonText = 'Save'
                title={data.title} 
                authors={data.authors.join(', ')} 
                link={data.canonicalVolumeLink} 
                image={'imageLinks' in data ? data.imageLinks.thumbnail : ''} 
                description={data.description || 'NO DESCRIPTION'}/>
            })
        }else{
            results = <h3 className='text-center'>Search for a book to get results</h3>
        }

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
                       {results}
                   </Col>
                </Row>
           </Container>
        )
    }
}
    

export default Search;