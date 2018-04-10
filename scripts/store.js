'use strict';


const store = (function() {
  let videos = [];
  let setVideos = function(response){
    store.videos = response.items.map(function(item){
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      };
    });
    

  };
  return {
    videos,
    setVideos,
  
  };
}());