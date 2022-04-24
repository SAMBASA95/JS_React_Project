import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term: 'Dmitri Vegas' }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
        // console.log(this.state.term)
        
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)}/> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                    <button className="ui button" type="submit" >Submit</button>
                </form>
                {/* <p>{this.state.term}</p> */}
            </div>
        )
    }
}
