const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const eye3 = document.querySelector('.eye3'); 
const cardWrapper = document.querySelector('.product__card-wrapper');
const nextArrow = document.querySelector('.icon-right-arrow');
const prevArrow = document.querySelector('.icon-left-arrow');

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

$(function(){
  $('.slider__slider-block').slick({
    infinite: true,
    nextArrow: nextArrow, 
    prevArrow: prevArrow
  })
})