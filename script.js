document.querySelectorAll('ul li a').forEach((episodeLink) => {
  episodeLink.addEventListener('click', (event) => {
    event.preventDefault();
    const videoSrc = event.target.getAttribute('href');
    playVideo(videoSrc);
  });
});

function playVideo(src) {
  const videoContainer = document.createElement('div');
  videoContainer.innerHTML = `
    <h2>Now Playing:</h2>
    <video controls width="100%" height="auto">
      <source src="${src}" type="application/x-mpegURL">
      Your browser does not support HLS.
    </video>
  `;
  document.getElementById('episodes').appendChild(videoContainer);
}
