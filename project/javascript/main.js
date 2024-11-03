function changeimg(id) {
    let image = document.getElementById("imga");
    let image1 = document.getElementById('imga2')

    let elements = document.getElementsByClassName("d1");

    if (id === "D1F1") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D1F2").style.borderLeft = "";
      document.getElementById("D1F3").style.borderLeft = "";
      image.src = "images/d1f1img.jpg";
    } else if (id === "D1F2") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D1F1").style.borderLeft = "";
      document.getElementById("D1F3").style.borderLeft = "";
      image.src = "images/d1F2img.jpg";
    } else if (id === "D1F3") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D1F1").style.borderLeft = "";
      document.getElementById("D1F2").style.borderLeft = "";
      image.src = "images/d1f3img.jpg";
    }
    else if (id === "D2F1") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D2F2").style.borderLeft = "";
      document.getElementById("D2F3").style.borderLeft = "";
      image1.src = "images/D2F1img.png";
    } else if (id === "D2F2") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D2F1").style.borderLeft = "";
      document.getElementById("D2F3").style.borderLeft = "";
      image1.src = "images/D2F2img.jpg";
    } else if (id === "D2F3") {
      document.getElementById(id).style.borderLeft = "2px solid black";
      document.getElementById("D2F1").style.borderLeft = "";
      document.getElementById("D2F2").style.borderLeft = "";
      image1.src = "images/D2F3img.jpg";
    }
  }
  
document.addEventListener("DOMContentLoaded", function () {
  const subscriptionCards = document.querySelectorAll(".subscription-card");

  
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  
  function scrollHandler() {
    subscriptionCards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("appear");
      }
    });
  }

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); 
});


document.querySelectorAll(".subscription-card").forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("hover");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("hover");
  });
});
