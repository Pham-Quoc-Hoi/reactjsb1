import React, { Component } from "react";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
import Item4 from "./item4";
import Item5 from "./item5";
import Item6 from "./item6";

class ListItem extends Component {
    render() {
        return (
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <Item1 />
                        <Item2 />
                        <Item3 />
                        <Item4 />
                        <Item5 />
                        <Item6 />
                    </div>
                </div>
            </section>

        )
    }
}

export default ListItem;