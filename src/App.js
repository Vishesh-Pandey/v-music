import "./App.css";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    setIsLoading((loading) => true);
    try {
      let data = await fetch(
        `https://v1.nocodeapi.com/visheshpandey/spotify/dNxiRTREOhvTzsYn/search?q=${
          keyword === "" ? "daku" : keyword
        }&type=track`
      );
      if (data.status === 200) {
        setMessage("");
        let convertedData = await data.json();
        setTracks((tracks) => convertedData.tracks.items);
      } else if (data.status === 429) {
        setMessage(
          (message) =>
            "We apologize for the inconvenience, but our API calls for this service have reached their limit for the month. Please check back later to continue enjoying our music selection. Thank you for your understanding."
        );
      } else if (data.status === 400) {
        setMessage((message) => "Please try again!");
      } else {
        setMessage((message) => "Something went wrong! Please try again!");
      }
    } catch (error) {
      setTracks((tracks) => []);
      setMessage("");
      alert("Unable to connect! Please check your internet connection");
    }
    setIsLoading((loading) => false);
  };

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="bi bi-music-note-list mx-3"></i> v-music
          </a>

          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={getTracks} className="btn btn-outline-success">
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className={`row ${isLoading ? "" : "d-none"}`}>
          <div className="col-12 py-5 text-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div className="row">
          {tracks.map((element) => {
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
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">
                      Artist: {element.album.artists[0].name}
                    </p>
                    <p className="card-text">
                      Release date: {element.album.release_date}
                    </p>
                    <audio
                      src={element.preview_url}
                      controls
                      className="w-100"
                    ></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col">
            <h4 className="text-center text-danger py-2">{message}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 py-5 text-center">
            <h1>
              <i className="bi bi-music-note-list mx-3"></i>
              v-music
            </h1>
            <h3 className="py-5">Discover music in 30 seconds</h3>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
                href="https://github.com/Vishesh-Pandey/v-music"
              >
                <i className="bi bi-github mx-2"></i>Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
