// cheking for current playlist in browser

export const initializePlaylist = () => {
  let likedMusic = localStorage.getItem("likedMusic");
  if (!likedMusic) {
    localStorage.setItem("likedMusic", "[]");
  }
  let allPlaylist = localStorage.getItem("allPlaylist");
  if (!allPlaylist) {
    localStorage.setItem("allPlaylist", "{}");
  }
};
