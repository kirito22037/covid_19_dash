import React from 'react';
import '../css/countrys.css';
import CountryGrid from './countryGrid'; 

class Countrys extends React.Component{

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form submited");
    }
    render()
    {
        return(
            <div id="part2Wrapper">
            <div id="part2">
                <form onSubmit={this.handleSubmit} >
                    <input 
                    id="inputBox"
                    name="country" 
                    type="text" placeholder="country name"/>
                </form>

                <CountryGrid/>
            </div>
            </div>
        )
    }
};

export default Countrys;