import React, { useContext, useState, useEffect } from "react";
import { ColorContext } from "../App";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  const { navbarColor, backgroundColor, setNavbarColor, setBackgroundColor } = useContext(
    ColorContext
  );

  const [invertColors, setInvertColors] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleInvertColors = () => {
    setInvertColors(!invertColors);
    setNavbarColor(invertColors ? "black" : "white");
    setBackgroundColor(invertColors ? "white" : "black");
  };

  const handleSaveColors = () => {
    localStorage.setItem("background-color", backgroundColor);
    localStorage.setItem("navbar-color", navbarColor);
    setAlertMessage("Colors saved successfully!");
  };

  useEffect(() => {
    const savedBackgroundColor = localStorage.getItem("background-color");
    const savedNavbarColor = localStorage.getItem("navbar-color");

    if (savedBackgroundColor && savedNavbarColor) {
      setBackgroundColor(savedBackgroundColor);
      setNavbarColor(savedNavbarColor);
    }
  }, [setBackgroundColor, setNavbarColor]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${invertColors ? "navbar-dark" : "navbar-light"}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/v-music" style={{ color: navbarColor }}>
          <i className="bi bi-music-note-list mx-3" style={{ color: navbarColor }}></i> v-music
        </a>
        <button
          type="button"
          className="btn btn-sm btn-secondary dropdown-toggle"
          data-bs-toggle="modal"
          data-bs-target="#colorMenu"
        >
          Menu
        </button>

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

      <div className="modal fade" id="colorMenu" tabIndex="-1" aria-labelledby="colorMenuLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="colorMenuLabel">Color Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button onClick={handleInvertColors} className="btn btn-light">
                Invert monochrome
              </button>
              <div>
                <label htmlFor="backgroundColor">Colour 1:</label>
                <input
                  id="backgroundColor"
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="navbarColor">Colour 2:</label>
                <input
                  id="navbarColor"
                  type="color"
                  value={navbarColor}
                  onChange={(e) => setNavbarColor(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button onClick={handleSaveColors} className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {alertMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMessage("")}
          ></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
