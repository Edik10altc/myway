import React, { Component } from 'react';
import YouTube from 'react-youtube'
import './RightBar.css';


class RightBar extends Component {

  render() {
      const opts = {
          height: '195',
          width: '320',
          playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
          }
      };
    return (
      <div className="RightBar">
          <YouTube
          videoId="nwQC-v4ef5o"
          opts={opts}
          onReady={this._onReady}
          />

      </div>
    )}

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default RightBar;
