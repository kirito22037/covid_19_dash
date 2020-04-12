import React from 'react';
import $ from 'jquery';
import '../css/countryGrid.css';
import Country from './country';

class CountryGrid extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            dataSet : [{country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"},
            {country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"},
            {country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"},
            {country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"},
            {country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"},
            {country_name:"---", cases:"---" , deaths:"---",total_recovered:"---",new_cases:"---" ,new_deaths:"---", serious_critical:"---"}
        ],
        dataStore : [] 
        }
    }

    fetchData2 = ()=>{
        console.log("fetching counries data");
        $(".refGif").css("display" , "inline-block");

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "7dad7540abmsh7e5b616e90fe98ap1c602bjsnb9bdeb143c9b"
            }
        }

        $.ajax(settings).done( (res2)=>{
            res2 = JSON.parse(res2);
            console.log("country data : ",res2.countries_stat);
            
            
            let dataSet = [];
            for(let i=0;i<6;i++)
            {
                dataSet.push(res2.countries_stat[i]);
            }

            $(".refGif").css("display","none");
            //console.log("dataSet : ",dataSet);
            //console.log("dataStore : ",res2.countries_stat);
            
            this.setState({
                dataStore : res2.countries_stat,
                dataSet : dataSet 
            });
            
        });
    };

    componentDidMount()
    {
        this.fetchData2();
        setInterval( this.fetchData2 , 3600000);
    }

    render()
    {
    
        return(
            <div id="countryGrid">
              {this.state.dataSet.map(data=>{
                  return (<Country data={data}/>)
              })}
            </div>
        )
    }
};

export default CountryGrid;
