class Carousel {
    constructor(carousel) {
      this.carousel = carousel;
      console.log("carousel", this.carousel);
      this.imageArr = Array.from(this.carousel.querySelectorAll(".carousel img"));
      console.log("imageArr", this.imageArr);
      
      this.leftButton = this.carousel.querySelector(".left-button");
      this.rightButton = this.carousel.querySelector(".right-button");
      let imageIndex = 1;
  
      this.rightButton.addEventListener("click", () => {
        this.displayImage(this.imageArr[imageIndex]);
        imageIndex++;
        if (imageIndex === this.imageArr.length) {
          imageIndex = 0;
        }
      });

      this.leftButton.addEventListener("click", () => {
        this.displayImage(this.imageArr[imageIndex]);
        imageIndex--;
        if (imageIndex < 0) {
          imageIndex = this.imageArr.length - 1;
        }
      });
    }
  
    displayImage(image) {
        this.imageArr.forEach(img => {
            img.style.display = "none";
        });
        image.style.display = "inline";
        image.style.zIndex = "-2";
        TweenMax.from(image, 0.8, {x: 1000});
        
        console.log("image", image);
      }
  }
  
  let carousel = document.querySelector(".carousel");
  
  carousel = new Carousel(carousel);
  
  carousel.displayImage(document.querySelector(".carousel img"));
