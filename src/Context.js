import { createContext, useState } from "react";

export const MusicContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);
  const [pinnedMusic, setPinnedMusic] = useState([]);
  const [resultOffset, setResultOffset] = useState(0);

  return (
    <MusicContext.Provider
      value={{
        isLoading,
        setIsLoading,
        likedMusic,
        setLikedMusic,
        resultOffset,
        setResultOffset,
        pinnedMusic,
        setPinnedMusic,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
