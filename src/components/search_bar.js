import React, { Component  } from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super();
        this.state = {term: 'dd'};
    }
    render(){
        return  (
         <div>
             <input
             value = {this.state.term}
             onChange={(event) => this.setState({term : event.target.value })}
             />
         </div>
        );

    }

}


/*
const SearchBar = () => {
    return <input />;
};
*/
export default SearchBar;