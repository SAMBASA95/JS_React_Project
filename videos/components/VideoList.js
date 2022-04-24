import React, { Component } from 'react';
import VideoItem from './VideoItem.js';


class VideoList extends Component {
    render() {
        const renderedList = this.props.videos.map(video => {
            // console.log(video)
            return (
                <VideoItem
                    key={video.id.videoId}
                    onVideoSelect={this.props.onVideoSelect}
                    video={video}
                />)
        })
        // console.log(renderedList)
        return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );
    }
}

export default VideoList;