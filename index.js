let movies = [
    {
      name: "luka",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse eveniet aperiam sequi vero architecto doloribus nisi placeat?",
      image: "images/slider 1.PNG"
    },
    {
      name: "loki",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse eveniet aperiam sequi vero architecto doloribus nisi placeat?",
      image: "images/slider 2.PNG"
    },
    {
      name: "the falcon and the winter soldier",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse eveniet aperiam sequi vero architecto doloribus nisi placeat?",
      image: "images/slider 3.PNG"
    },
    {
      name: "wanda vision",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse eveniet aperiam sequi vero architecto doloribus nisi placeat?",
      image: "images/slider 4.PNG"
    },
    {
      name: "raya and the last dragon",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse eveniet aperiam sequi vero architecto doloribus nisi placeat?",
      image: "images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel"); // to select the query from html to javascript
  let sliders = [];
  
  let slideIndex = 0; // array index to track the current slide
  
  const createSlide = () => {
    // function to show the first slide again after all slides are over
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // Create DOM element
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all element
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    // carousel.appendChild(imgElement);
    carousel.appendChild(slide);
    carousel.appendChild(content);
  
    // setting up image
  
    imgElement.src = movies[slideIndex].image;
  
    slideIndex++;
  
    // setting up the element classname
  
    slide.className = "slider";
    content.className = "slide-content";
    p.className = "movie-desc";
    h1.className = "movie-title";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 3000);
  
  // video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // card sliders
  