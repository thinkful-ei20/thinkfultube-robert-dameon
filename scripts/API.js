const APIobj = (function () {
  
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyAKxpNyQyVJTxORQDGTpGcMOt0BS6Adg7I';

  
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      q: `${searchTerm} in:name`,
      part: 'snippet',
      key: API_KEY,
      per_page: 5,
    };
  
    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos,
  };
}());