const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});


const selfSuff = document.querySelector(".self-suff");
const selfSuffPic = document.querySelector(".self-pic")
const flipPicBack = document.querySelector(".close-self-suff");
const sustainability = document.querySelector(".sustainability");
const susPic = document.querySelector(".sus-pic")
const flipSusBack = document.querySelector(".close-sustainability")
const generational = document.querySelector(".generation")
const genPic = document.querySelector(".gen-pic")
const flipPic = document.querySelector(".close-generation ");




const flipCircle = function () {
  selfSuff.classList.remove('d-none');
  
  
}

const flipBack = function () {
  selfSuff.classList.add("d-none")
}

const flipSusCircle = function () {
  sustainability.classList.remove("d-none")
}

const flipSusPicBack = function () {
  sustainability.classList.add("d-none")
}



const flipGenPic = function () {
  generational.classList.remove("d-none")
}

const flipGenPicBack = function () {
  generational.classList.add("d-none")
}

selfSuffPic.addEventListener('click', flipCircle);
flipPicBack.addEventListener('click', flipBack);
susPic.addEventListener('click',flipSusCircle)
flipSusBack.addEventListener('click', flipSusPicBack);
genPic.addEventListener('click', flipGenPic)
flipPic.addEventListener('click',flipGenPicBack )
