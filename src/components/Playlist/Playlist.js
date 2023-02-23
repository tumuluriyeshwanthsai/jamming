import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input value={this.props.playlistName ||'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <a href="https://open.spotify.com/playlist/0HpyubfyyVMViOsu2a1PTi"><button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button></a>
            </div>
        );
    }

}