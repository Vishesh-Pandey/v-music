import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { MusicContext } from "../Context";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-music-note-list mx-3"></i> v-music
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Liked Music {likedMusic.length}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a disabled className="dropdown-item text-secondary" href="/">
                All Playlist
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/likedMusic">
                Liked Music ( {likedMusic.length} )
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="btn text-secondary border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                disabled
              >
                Create new
              </button>
            </li>
          </ul>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyPress}
            className="form-control me-2 w-75"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={fetchMusicData} className="btn btn-outline-success">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
