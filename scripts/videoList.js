'use strict';
/* global store, APIobj */

const videoList = (function(){

  let generateListItem = function(video){
    return `
    <li>
    <img src="${video.thumbnail}"
    <p>${video.title}<p>
    </li>
  `;
  };

  let render = function(){
    $('.results').html(store.videos.map(video => videoList.generateListItem(video)));
  };

  


  let handleFormSubmit =function(){
    // $('#searchForm').on('submit',function(event){
    // event.preventDefault();
      
    let queryTarget = $('#search-term').val();
    $('#search-term').val('');
    APIobj.fetchVideos(queryTarget, function(response){
      store.setVideos(response);
      render();
    });
    //});
  };
  
  let bindEventListeners = function(){
    $('#searchForm').on('submit',function(event){
      event.preventDefault();
      handleFormSubmit();
    });};
  return {
    generateListItem,
    render,
    bindEventListeners,
  };

}());