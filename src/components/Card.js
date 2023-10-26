import React, { useEffect, useState } from "react";

function Card({ element }) {
  const [likedMusic, setlikedMusic] = useState([]);

  const handleLike = () => {
    let likedMusic = localStorage.getItem("likedMusic");
    likedMusic = JSON.parse(likedMusic);
    let updatedLikedMusic = [];
    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    } else {
      updatedLikedMusic = likedMusic;
      updatedLikedMusic.push(element);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    }
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    setlikedMusic(localLikedMusic);
  }, []);

  return (
    <div key={element.id} className="col-lg-3 col-md-6 py-2">
      <div className="card">
        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
          <img
            src={element.album.images[0].url}
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {element.name}
            <div className="add-options d-flex align-items-start">
              {likedMusic.some((item) => item.id === element.id) ? (
                <button className="btn btn-outline-secondary">
                  <i
                    onClick={handleLike}
                    className="bi bi-heart-fill text-danger"
                  ></i>
                </button>
              ) : (
                <button className="btn btn-outline-secondary">
                  <i onClick={handleLike} className="bi bi-heart"></i>
                </button>
              )}

              <div className="dropdown mx-1">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-list"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item text-secondary">
                      Pin
                    </button>
                  </li>

                  <li>
                    <button className="dropdown-item text-secondary">
                      Your Playlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </h5>
          <p className="card-text">Artist: {element.album.artists[0].name}</p>
          <p className="card-text">
            Release date: {element.album.release_date}
          </p>
          <audio src={element.preview_url} controls className="w-100"></audio>
        </div>
      </div>
    </div>
  );
}

export default Card;
