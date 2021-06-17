import React, {Component} from 'react';
import './App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';
import RadioBtn from './RadioBtn';
import Scroll from './Scroll'
// import {robots} from './robots'

class App extends Component{
    constructor(props){
        console.log(props)
        super();
        this.state = {
            robots: [],
            searchfield: '',
            radioBtn:'name'        }
    }

    //lifecycle
    componentDidMount(){
        //fetch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({robots:users})
            })
    }


    onSearchInput = (event) => {
        this.setState({searchfield:event.target.value});
    }

    onRadioSelect = (event) => {
        this.setState({radioBtn:event.target.value});
        console.log(event.target.value);
    }

    render(){
        const {robots, searchfield, radioBtn} = this.state;
        const filteredRobots = robots.filter((item) => {
            return item[radioBtn].toLowerCase().includes(searchfield.toLowerCase());
        })

        //loader (using fetch)
        if(robots.length === 0){
            return <h1>Loading...</h1>;
        }else{
            return(
                <div className = "tc">
                    <h1 className = 'f1'>Robofriens</h1>
                    <div className = "tc">
                        <SearchBox searchInput = {this.onSearchInput}/>
                        <RadioBtn radioSelect = {this.onRadioSelect}/>
                    </div>

                    {/* Component can be also wrapper like Scroll, */}
                    {/* and can have 'props'. If component has NO children props */}
                    {/* is empty, if has children like scroll than you get something like this: */}
                    {/* {children: {…}} */}
                        {/* children: {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …} */}
                        {/* __proto__: Object */}
                    <Scroll>
                        <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;