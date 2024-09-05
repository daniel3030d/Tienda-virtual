const dots = document.querySelectorAll(".dot");
const sizes = document.querySelectorAll(".sizes__item");
const buyButton = document.querySelector('#btn-shop');
const closeModal = document.querySelector('#closeModal');
const modal = document.querySelector(".modal");
const thumbnails = document.querySelectorAll('.thumbnail-image');
const setImages = document.querySelectorAll('.set__item__image');
const  hand = document.querySelector('#hand') ;
const thumbnails2 = document.querySelectorAll('.thumbnail-image2');
const setImages2 = document.querySelectorAll('.set__item__image2');
const  hand2 = document.querySelector('#hand') ;
const thumbnails3 = document.querySelectorAll('.thumbnail-image3');
const setImages3 = document.querySelectorAll('.set__item__image3');
const  hand3 = document.querySelector('#hand') ;
const thumbnails4 = document.querySelectorAll('.thumbnail-image4');
const setImages4 = document.querySelectorAll('.set__item__image4');
const  hand4 = document.querySelector('#hand') ;
const thumbnails5 = document.querySelectorAll('.thumbnail-image5');
const setImages5 = document.querySelectorAll('.set__item__image5');
const  hand5 = document.querySelector('#hand') ;
const thumbnails6 = document.querySelectorAll('.thumbnail-image6');
const setImages6 = document.querySelectorAll('.set__item__image6');
const  hand6 = document.querySelector('#hand') ;



function changeFocus(){
   dots.forEach(dot => dot.classList.remove('isActive'))
   this.classList.add('isActive');
}
function changeSize(){
   sizes.forEach(size =>size.classList.remove('is-selected'))
   this.classList.add('is-selected');
}
function showModal(){
   modal.classList.add('isVisible');
}
function hiddenModal(){
   modal.classList.remove('isVisible');
}




function changeThumbnail(){
   thumbnails.forEach(thumbnail => thumbnail.classList.remove('isActiveThumbnail'))
   this.classList.toggle('isActiveThumbnail');    
}
function changeImage(){
  let {outfit} = this.dataset;
   switch (outfit) {
      case "setOne":
         this.setAttribute('src',`./images/deportivo11.webp`)
         break;
      case "setTwo":
         this.setAttribute('src',`./images/deportivo22.webp`)
         break;
      case "setThree":
         this.setAttribute('src',`./images/deportivo33.webp`)
         break;
      default:
         break;
   }
   
}

function setImageDefault(){
   let {outfit} = this.dataset;
   switch (outfit) {
      case "setOne":
         this.setAttribute('src',`./images/deportivo1.webp`)
         break;
      case "setTwo":
         this.setAttribute('src',`./images/deportivo2.webp`)
         break;
      case "setThree":
         this.setAttribute('src',`./images/deportivo3.webp`)
         break;
      default:
         break;
   }
}



function changeThumbnail2(){
   thumbnails2.forEach(thumbnail2 => thumbnail2.classList.remove('isActiveThumbnail2'))
   this.classList.toggle('isActiveThumbnail2');    
}
function changeImage2(){
  let {outfit} = this.dataset;
   switch (outfit) {
      case "setFour":
         this.setAttribute('src',`./images/medias11.webp`)
         break;
        case "setFive":
         this.setAttribute('src',`./images/medias22.webp`)
         break;
      case "setSix":
         this.setAttribute('src',`./images/medias33.webp`)
         break;
      default:
         break;
   }
   
}

function setImageDefault2(){
   let {outfit} = this.dataset;
   switch (outfit) {
         case "setFour":
         this.setAttribute('src',`./images/medias1.webp`)
         break;
      case "setFive":
         this.setAttribute('src',`./images/medias2.webp`)
         break;
      case "setSix":
         this.setAttribute('src',`./images/medias3.webp`)
         break;
      default:
         break;
   }
}



function changeThumbnail3(){
   thumbnails3.forEach(thumbnail3 => thumbnail3.classList.remove('isActiveThumbnail3'))
   this.classList.toggle('isActiveThumbnail3');    
}
function changeImage3(){
  let {outfit} = this.dataset;
   switch (outfit) {
      case "set7":
         this.setAttribute('src',`./images/bolso11.webp`)
         break;
        case "set8":
         this.setAttribute('src',`./images/bolso22.webp`)
         break;
      case "set9":
         this.setAttribute('src',`./images/bolso33.webp`)
         break;
      default:
         break;
   }
   
}

function setImageDefault3(){
   let {outfit} = this.dataset;
   switch (outfit) {
         case "set7":
         this.setAttribute('src',`./images/bolso1.webp`)
         break;
      case "set8":
         this.setAttribute('src',`./images/bolso2.webp`)
         break;
      case "set9":
         this.setAttribute('src',`./images/bolso3.webp`)
         break;
      default:
         break;
   }
}



function changeThumbnail4(){
   thumbnails4.forEach(thumbnail4 => thumbnail4.classList.remove('isActiveThumbnail4'))
   this.classList.toggle('isActiveThumbnail4');    
}
function changeImage4(){
  let {outfit} = this.dataset;
   switch (outfit) {
      case "set10":
         this.setAttribute('src',`./images/atomizador11.webp`)
         break;
        case "set11":
         this.setAttribute('src',`./images/brasiel11.webp`)
         break;
      case "set12":
         this.setAttribute('src',`./images/short00.webp`)
         break;
      default:
         break;
   }
   
}

function setImageDefault4(){
   let {outfit} = this.dataset;
   switch (outfit) {
         case "set10":
         this.setAttribute('src',`./images/atomizador1.webp`)
         break;
      case "set11":
         this.setAttribute('src',`./images/brasiel1.webp`)
         break;
      case "set12":
         this.setAttribute('src',`./images/short0.webp`)
         break;
      default:
         break;
   }
}








dots.forEach(dot => dot.addEventListener('click', changeFocus))
sizes.forEach(item=> item.addEventListener('click',changeSize))
buyButton.addEventListener('click',showModal)
closeModal.addEventListener('click',hiddenModal)
thumbnails.forEach(thumbnail => thumbnail.addEventListener('click',changeThumbnail))
setImages.forEach(image=>image.addEventListener('mouseover',changeImage))
setImages.forEach(image=>image.addEventListener('mouseout',setImageDefault))
thumbnails2.forEach(thumbnail2 => thumbnail2.addEventListener('click',changeThumbnail2))
setImages2.forEach(image=>image.addEventListener('mouseover',changeImage2))
setImages2.forEach(image=>image.addEventListener('mouseout',setImageDefault2))
thumbnails3.forEach(thumbnail3 => thumbnail3.addEventListener('click',changeThumbnail3))
setImages3.forEach(image=>image.addEventListener('mouseover',changeImage3))
setImages3.forEach(image=>image.addEventListener('mouseout',setImageDefault3))
thumbnails4.forEach(thumbnail4 => thumbnail4.addEventListener('click',changeThumbnail4))
setImages4.forEach(image=>image.addEventListener('mouseover',changeImage4))
setImages4.forEach(image=>image.addEventListener('mouseout',setImageDefault4))
thumbnails5.forEach(thumbnail5 => thumbnail5.addEventListener('click',changeThumbnail5))
setImages5.forEach(image=>image.addEventListener('mouseover',changeImage5))
setImages5.forEach(image=>image.addEventListener('mouseout',setImageDefault5))
thumbnails6.forEach(thumbnail6 => thumbnail6.addEventListener('click',changeThumbnail6))
setImages6.forEach(image=>image.addEventListener('mouseover',changeImage6))
setImages6.forEach(image=>image.addEventListener('mouseout',setImageDefault6))
