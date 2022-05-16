const tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});


const selfSuff = document.querySelector(".self-suff");
const selfSuffPic = document.querySelector(".self-pic")
const flipPicBack = document.querySelector(".close-self-suff");





const flipCircle = function () {
  selfSuff.classList.remove('d-none');
}

const flipBack = function () {
  selfSuff.classList.add("d-none")
}

selfSuffPic.addEventListener('click', flipCircle);
flipPicBack.addEventListener('click', flipBack);