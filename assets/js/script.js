  /* Image upload */
  const fileInput = document.querySelector("#upload-image");
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      document.querySelector("img").src = URL.createObjectURL(file);
    }
  });