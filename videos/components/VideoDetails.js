import React, { Component } from 'react';

class VideoDetails extends Component {

    handleClick() {
        return `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    }

    render() {

        if (!this.props.video) {
            return (
                <div>
                    <div className="content">
                        <div className="header">
                            Loading...
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <div className="content ui segment">
                        <div className="ui embed">
                            <iframe width="560" height="315" src={this.handleClick()} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <h4 className="ui header">
                            {this.props.video.snippet.title}
                        </h4>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
                </div>
            )
        }
    }
}

export default VideoDetails;