const pictureInnerContainer = document.querySelector(
    ".picture-inner-container",
  );
  function createGallery(elem, amount) {
    const images = [];
    let count = 1;
  
    while (count <= amount) {
      images.push(createImg(count));
      count++;
    }
  
    images.sort(() => 0.5 - Math.random());
  
    elem.append(...images);
  }
  
  function createImg(number) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = `assets/img/galery/webp/galery${number}.webp`;
    img.classList.add("picture-container__picture");
   
    img.alt = `galery${number}`;
    img.loading = "lazy";
    picture.append(img);
    return img;
  }
  
  
  createGallery(pictureInnerContainer, 15);