import React, { Component } from 'react';
import Accordion from './Accordion.js'
import Search from './Search.js'

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <Accordion items={items} />
                <Serach />
            </div>
        );
    }
}

export default App;
