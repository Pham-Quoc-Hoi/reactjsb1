import React, { Component } from "react";
import Banner from "./banner";
import ListItem from "./listItem";

class Body extends Component {
    render() {
        return (
            <>
                <Banner />
                <ListItem />
            </>
        )
    }
}

export default Body;