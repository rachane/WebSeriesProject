document.querySelectorAll('ul li a').forEach((episodeLink) => {
    episodeLink.addEventListener('click', (event) => {
      event.preventDefault();
      const videoSrc = event.target.getAttribute('data-video');
      playVideo(videoSrc);
    });
  });
  
  function playVideo(src) {
    const videoContainer = document.getElementById('video-player');
    const videoElement = document.getElementById('video');
    const videoSource = document.getElementById('video-source');
  
    // Show video player
    videoContainer.style.display = 'block';
  
    // Set the source for the video
    videoSource.src = src;
    videoElement.load();
  
    // Load the previous position from localStorage
    const savedTime = localStorage.getItem(src);
    if (savedTime) {
      videoElement.currentTime = savedTime; // Resume from saved position
    }
  
    // Save the position when the video is paused or ended
    videoElement.addEventListener('pause', () => {
      localStorage.setItem(src, videoElement.currentTime);
    });
  
    videoElement.addEventListener('ended', () => {
      localStorage.removeItem(src); // Clear the saved position when the video ends
    });
  }
  