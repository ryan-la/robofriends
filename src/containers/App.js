import React from "react";
import CardList from "../components/CardList.js"
import SearchBox from "../components/Searchbox.js"
import './App.css'
// import { robotsInfo } from "../robots.js";
import Scroll from "../components/Scroll.js"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // creating new variables where its value will be changed and passed in

            // robotsInfo: robotsInfo, 
            // robotsInfo (left) is currently equalling the robotsInfo (right) array being imported

            robotsInfo: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        // fetches json object
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({
                    //robotsInfo already wrapped in array, returns the whole object from the fetch
                    robotsInfo: users
                })
            })
    }

    // create a our own function
    // use "=" and "=>" to make sure the this is regarding the App
    // dont need bind
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        //destructuring
        const { robotsInfo, searchfield } = this.state
        const filteredRobots = robotsInfo.filter(robot => {
            // if the name of the robot (in lowercase) from the robots.js object INCLUDES what is typed in the searchfield, return that card in CardList
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //returns true if matches
        })

        // if (robotsInfo.length === 0) {
        //     return <h1>Loading...</h1>
        // } else {
        //     return (
        //         <div className="tc">
        //             <h1 className="f1">RoboFriends</h1>
        //             {/* pass onSearchChange to SearchBox, everytime there is onChange on the input it lets app know there is a change and updates state of seachfield to what we type */}
        //             <SearchBox searchChange={this.onSearchChange} />

        //             <Scroll>
        //                 {/* the first robotsInfo is variable, pass in the variable  */}
        //                 {/* <CardList robotsInfo={robotsInfo} /> */}

        //                 {/* Can access robotsInfo from state */}
        //                 {/* <CardList robotsInfo={this.state.robotsInfo} /> */}

        //                 <CardList robotsInfo={filteredRobots} />
        //             </Scroll>
        //         </div>
        //     )
        // }

        return (
            (robotsInfo.length === 0) ? <h1>Loading...</h1> :
                (<div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    {/* pass onSearchChange to SearchBox, everytime there is onChange on the input it lets app know there is a change and updates state of seachfield to what we type */}
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        {/* the first robotsInfo is variable, pass in the variable  */}
                        {/* <CardList robotsInfo={robotsInfo} /> */}

                        {/* Can access robotsInfo from state */}
                        {/* <CardList robotsInfo={this.state.robotsInfo} /> */}

                        <CardList robotsInfo={filteredRobots} />
                    </Scroll>
                </div>)
        )
    }
}

export default App;