import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        return (
            <div
                onClick={() => this.props.onVideoSelect(this.props.video)}
                className="video-item ui container item">
                <img className="ui image" srcSet={this.props.video.snippet.thumbnails.default.url} alt={this.props.video.snippet.thumbnails.medium.url} />
                
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default VideoItem;