import React, {Component} from 'react';
import {YearPicker, MonthPicker, DayPicker} from 'react-dropdown-date';

class Dropdate extends Component {
    constructor(props){
    super(props);
    this.state = {year:null, month:null, day: null}}

    render(){
        return (
            <div>
                

                
                <DayPicker
                defaultValue={'Day'}
                
                endYearGiven
                required={true}
                disabled={false}
                value={this.state.day}
                onChange={(day)=>{
                    this.setState({day});
                    console.log(day);

                }}
                id={'day'}
                name={'day'}
                
                
                />
                <MonthPicker
                defaultValue={'Month'}
                short
                endYearGiven
                
                required={true}
                disabled={false}
                value={this.state.month}
                onChange={(month)=>{
                    this.setState({month});
                    console.log(month);
                }}
                id={'month'}
                name={'month'}/>
                    
                <YearPicker
                defaultValue={'Year'}
                start={2010}
                end={2020}
                day={this.state.day}

                month={this.state.month}
                reverse
                required={true}
                disabled={false}
                value={this.state.year}
                onChange={(year)=>{
                    this.setState({year});
                    console.log(year);

                }}
                id={'year'}
                name={'year'}
                
                
                />
                
                
                
                

                
                
                
                   
                
                
                

            
        </ div>           
        )
    }
}

export default Dropdate;