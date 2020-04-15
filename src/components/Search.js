import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Search.css";
class Search extends Component{
    render(){
        return (
        
        <div id="searchMovie">    
            <Form inline>
            <FormGroup>
              <Input type="text" name="searchMovie" placeholder="영화제목" />
            </FormGroup>
            {' '}
            <Button style-color="#bac8ff">검색</Button>
          </Form>
        </div>
        );
}
}
export default Search;
