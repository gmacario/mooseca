import React from 'react'
import {connect} from 'react-redux';

import AlbumsView from './AlbumsView'
import ArtistsView from './ArtistsView'
import SongsView from './SongsView'

import * as QueueActions from '../../actions/QueueActions'
import * as LibraryActions from '../../actions/LibraryActions'

let View = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      console.log(this.props.view);
      console.log('---------------------------------------------------');
      console.log(this.props.library);
      console.log('---------------------------------------------------');
      let view = null
      switch (this.props.view) {
         case 'album':
            view = (<AlbumsView {...this.props}/>)
            break
         case 'artist':
            view = (<ArtistsView {...this.props}/>)
            break
         case 'music':
            view = (<SongsView library={this.props.library}/>)
            break
         default:
            view = (
               <div>{'ciao'}</div>
            )
      }

      return (
         <div className="view">
            <div className="scroll">
               {view}
            </div>
         </div>
      )
   }
})

function mapStateToProps(state) {
   return {library: state.library, queue: state.queue}
}

function mapDispatchToProps(dispatch) {
   return {
      replaceQueueWithAlbum: (album) => dispatch(QueueActions.replaceWithAlbum(album)),
      getAlbums: () => dispatch(LibraryActions.getAlbums()),
      getArtists: () => dispatch(LibraryActions.getArtists())
   };
}

View = connect(mapStateToProps, mapDispatchToProps)(View)

export default View
