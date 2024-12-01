window.onload = function () {
    console.log("Page loaded successfully");
  
    const images = document.querySelectorAll(".preview");
    const displayDiv = document.getElementById("image");
  
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", function () {
        displayDiv.style.backgroundImage = `url('${images[i].src}')`;
        displayDiv.textContent = images[i].alt;
      });
  
      images[i].addEventListener("mouseout", function () {
        displayDiv.style.backgroundImage = "none";
        displayDiv.textContent = "Hover over an image below to display here.";
      });
  
      images[i].addEventListener("focus", function () {
        displayDiv.style.backgroundImage = `url('${images[i].src}')`;
        displayDiv.textContent = images[i].alt;
      });
  
      images[i].addEventListener("blur", function () {
        displayDiv.style.backgroundImage = "none";
        displayDiv.textContent = "Hover over an image below to display here.";
      });
    }
  };
  