import React, { Component } from 'react';
import YouTube from 'react-youtube'
import s from './RightBar.css';
import socialImg from './Social.png'


class RightBar extends Component {

  render() {
      const opts = {
          height: '78',
          width: '128',
          playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
          }
      };
    return (
      <div className={s.RightBar}>
          {/*<YouTube*/}
          {/*videoId="nwQC-v4ef5o"*/}
          {/*opts={opts}*/}
          {/*onReady={this._onReady}*/}
          {/*/>*/}
        <img src={socialImg} className={s.socialImg}/>
      </div>
    )}

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

export default RightBar;
