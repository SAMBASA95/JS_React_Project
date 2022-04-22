import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: '' }  
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term);
        // console.log(this.state.term)
    }
    // onFormSubmit(event){
    //     event.preventDefault()
    //     console.log(this.state.term)
    // }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)}/> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
                {/* <p>{this.state.term}</p> */}
            </div>
        )
    }
}
