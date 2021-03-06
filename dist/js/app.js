const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const eye3 = document.querySelector('.eye3'); 
const cardWrapper = document.querySelector('.product__card-wrapper');
const nextArrow = document.querySelector('.icon-right-arrow');
const prevArrow = document.querySelector('.icon-left-arrow');
const menuBtn = document.querySelector('.navigation__btn');
const navList = document.querySelector('.navigation__list');

//card template
const card =
`
  <div class="product__card">
    <img class="product__card-img" src="./img/features-right-img.svg" alt="">
    <div class="product__card-description">
      <h3 class="product__card-title">ANTIBAKTERIELLE BEHANDLUNGS - SCHLAUFE</h3>
      <p class="product__card-text">
        Sicheres Handling durch 
        9fach isolierte
        Behandlungsschlaufe
      </p>
      <p class="product__card-text text-italic">
        < 20cm Eindringtiefe
      </p>
    </div>
  </div>
` 
//events for eyes on the product
eye1.addEventListener('mouseover', (e) => {
  cardWrapper.insertAdjacentHTML('afterbegin', card);
}) 
eye1.addEventListener('mouseout', (e) => {
  cardWrapper.innerHTML = ''; 
})

eye2.addEventListener('mouseover', (e) => {
  cardWrapper.insertAdjacentHTML('afterbegin', card);
})
eye2.addEventListener('mouseout', (e) => {
  cardWrapper.innerHTML = ''; 
})

eye3.addEventListener('mouseover', (e) => {
  cardWrapper.insertAdjacentHTML('afterbegin', card);
})
eye3.addEventListener('mouseout', (e) => {
  cardWrapper.innerHTML = ''; 
}) 

menuBtn.addEventListener('click', (e) => {
  navList.classList.toggle('navigation__list--active');
})

//reviews slider
$(function(){
  $('.slider__slider-block').slick({
    infinite: true,
    nextArrow: nextArrow, 
    prevArrow: prevArrow, 
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  //mobile slider in the features section
  $('.product__card-slider').slick({
    infinite: true,
    autoplay: true, 
    nextArrow: false, 
    prevArrow: false,
  })
})