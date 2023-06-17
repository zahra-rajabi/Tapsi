const serviceContentClassic = document.querySelector(
  ".service-content-classic"
);
const serviceItemClassic = document.querySelector(".service-item-classic");
serviceContentClassic.addEventListener("click", function () {
  serviceContentClassic.classList.toggle(".service-content--active");
});
