import React, { Component } from 'react'
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import youtube from './api/Youtube.js';
import VideoDetails from './VideoDetails.js';

export default class App extends Component {
    state = {
        'videos': [], selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit('Dmitri Vegas')
    }

    onTermSubmit = async (term) => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response)
        this.setState({ 
            videos: response.data.items ,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        console.log("From the App!", video);
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="row ui">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                {/* <p>{this.state.videos.length}</p> */}
            </div>
        )
    }
}
