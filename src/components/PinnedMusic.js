import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { MusicContext } from "../Context";

function PinnedMusic() {
  const musicContext = useContext(MusicContext);
  const pinnedMusic = musicContext.pinnedMusic;
  const setpinnedMusic = musicContext.setPinnedMusic;

  useEffect(() => {
    window.scrollTo(0, 0);
    const localPinnedMusic = JSON.parse(localStorage.getItem("pinnedMusic"));
    setpinnedMusic(localPinnedMusic);
  }, [setpinnedMusic]);

  return (
    <div>
      <div className="container">
        {pinnedMusic.length === 0 ? (
          <div className="row">
            <div className="col">
              <h3 className="py-5 text-center">
                You don't have any pinned music yet!
              </h3>
              <div className="text-center">
                <i className="bi bi-emoji-frown fs-1"></i>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {pinnedMusic.map((element) => {
              return <Card key={element.id} element={element} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PinnedMusic;
