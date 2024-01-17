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
    console.log(localPinnedMusic);
    setpinnedMusic(localPinnedMusic);
  }, [setpinnedMusic]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {pinnedMusic.map((element) => {
            return <Card key={element.id} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PinnedMusic;
