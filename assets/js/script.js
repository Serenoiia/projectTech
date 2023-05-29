  /* Image upload preview */
  const fileInput = document.querySelector("#upload-image");
  const errorMessage = document.querySelector("#error-message");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();

      reader.addEventListener("error", (event) => {
        const error = reader.error;
        errorMessage.textContent = `Error reading the file ${error.message}`;
      });

      reader.readAsDataURL(file);
      document.querySelector("img").src = URL.createObjectURL(file);
      
    }
  });

  /* Spotify embed */
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById("embed-iframe");
    const options = {
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
      };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };  
  