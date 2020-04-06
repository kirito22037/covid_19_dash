import React from 'react';
import '../css/country.css';
import refres from '../gifs/gif_3.gif';

class Country extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="Ccard" >
                
                <img 
                className="refreshing refGif " src={refres} />
                
                <h3>
                {this.props.data.country_name}
                </h3>

            <div className="cardGrid">
                <div class="Cdata"
                style={{gridRow : "1/2" , gridColumn : "1/2"}}>
                    <h4>Cases</h4>
                    <p>{this.props.data.cases}</p>
                </div>
                
                <div class="Cdata"
                style={{gridRow : "2/3" , gridColumn : "1/2"}}>
                    <h4>Deaths</h4>
                    <p>{this.props.data.deaths}</p>
                </div>

                <div class="Cdata"
                style={{gridRow : "3/4" , gridColumn : "1/2"}}>
                    <h4>Recoverd</h4>
                    <p>{this.props.data.total_recovered}</p>
                </div>
                <div class="Cdata"
                style={{gridRow : "1/2" , gridColumn : "2/3"}}>
                    <h4>Cases Today</h4>
                    <p>{this.props.data.new_cases}</p>
                </div>
                <div class="Cdata"
                style={{gridRow : "2/3" , gridColumn : "2/3"}}>
                    <h4>Deaths Today</h4>
                    <p>{this.props.data.new_deaths}</p>
                </div>
                <div class="Cdata"
                style={{gridRow : "3/4" , gridColumn : "2/3"}}>
                    <h4>Critical</h4>
                    <p>{this.props.data.serious_critical}</p>
                </div>
                </div>
            </div>
        )
    }
};

export default Country;