import { createContext, useState } from "react";

export const MusicContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);

  return (
    <MusicContext.Provider
      value={{ isLoading, setIsLoading, likedMusic, setLikedMusic }}
    >
      {children}
    </MusicContext.Provider>
  );
};
