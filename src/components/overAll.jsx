import React from 'react';
import $ from 'jquery';
import '../css/overAll.css';
import refres from '../gifs/gif_3.gif';
import LvlBar from './lvlBar';

class OverallStat extends React.Component{
    constructor()
    {
        super();
        this.state={
            loading : true ,
            data : {
                death : "-----" ,
                case : "-----",
                recovered : "-----",
                recovPer : 0
            }
        }
    }

    convertToInt=( str )=>{
        str = str.replace(/[^\d\.\-]/g, ""); // You might also include + if you want them to be able to type it
        let num = parseInt(str);

        return num;
    };

    //-----------------fetching data--------------------
    fetchData = ()=>{
        console.log("fetching worlds data");
        //--------refresh animation start-------
        $("#cardRefr").css("display","inline-block");

        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "7dad7540abmsh7e5b616e90fe98ap1c602bjsnb9bdeb143c9b"
            }
        }
        
        $.ajax(settings).done( (response)=>{
            response = JSON.parse(response);
            console.log("the response we got : ",response);
            
            console.log(response.total_deaths);

            let x = this.convertToInt(response.total_recovered);
            let y = this.convertToInt(response.total_cases);
            console.log("the recover % is : " , x , y);
            let z=parseFloat((x / y )*100);
            
            z = Math.ceil(z);

            console.log(z);

            $("#cardRefr").css("display","none");

            this.setState((prevState)=>{
                return {
                    loading : false ,
                    data : {
                        death : response.total_deaths,
                        case : response.total_cases,
                        recovered : response.total_recovered,
                        recovPer :  z
                    }
                }
            })
        });
    };

    calltemp = ()=>{
        console.log("called");
    }

    componentDidMount()
    {
        //console.log("only called once");
        console.log("worlds component mounted");
        this.fetchData();
        setInterval( this.fetchData , 3600000);
    }

    render()
    {
        
        return(
        <div id="mainCardWrapper">
            
            <div id="card">
                
                <img 
                id="cardRefr"
                className="refreshing" 
                src={refres} />

                <div id="death">
                    <h3>Total Death</h3>
        <p className="value">{ this.state.data.death }</p>
                </div>

                <div id="case">
                    <h3>Total Case</h3>
        <p className="value">{ this.state.data.case }</p>
                </div>

                <div id="recovered">
                    <h3>Total Recovered</h3>
        <p className="value">{ this.state.data.recovered }</p>
                </div>

                <LvlBar recover={ this.state.data.recovPer }/>
            </div>
        </div>);
    }
};

export default OverallStat;