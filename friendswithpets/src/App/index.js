import React, { Component } from "react";
import FriendList from "./FriendList"

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                 <FriendList> </FriendList>      
            </div>
        )
    }
}

export default App