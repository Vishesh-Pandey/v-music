import React, { useState } from "react";

function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");

  const create = () => {
    let currentPlaylist = localStorage.getItem("allPlaylist");
    console.log(currentPlaylist);
    currentPlaylist = JSON.parse(currentPlaylist);
    currentPlaylist[playlistName] = []; // adding new empty playlist with given name
    localStorage.setItem("allPlaylist", currentPlaylist.toString());
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            New Playlist
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button onClick={create} type="button" className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
