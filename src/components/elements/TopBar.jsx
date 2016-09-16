import React from 'react'

import PlayPausePane from '../panes/PlayPausePane'
import InfoPane from '../panes/InfoPane'
import VolumePane from '../panes/VolumePane'
import SearchPane from '../panes/SearchPane'
import WindowButtonsPane from '../panes/WindowButtonsPane'

var TopBar = React.createClass({
   _handlePlayPauseButtonsClick(clicked) {
      this.props.onPlayPause(clicked)
   },
   render() {
      return (
         <div className="topbar">
         <div className="group">
            <PlayPausePane onButtonClick={this._handlePlayPauseButtonsClick}/>
            <VolumePane/> {/* {'ciao'} */}
         </div>
            <InfoPane/> {/* {'ciao'} */}
            <SearchPane/>
            <WindowButtonsPane/>
         </div>
      )
   }
})

export default TopBar