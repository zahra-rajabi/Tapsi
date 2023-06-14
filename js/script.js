const serviceClassic = Document.querySelector(".service-content-classic");
const serviceClassicItem = Document.querySelector(".service-item-classic");
serviceClassicItem.addEventListener("click", function () {
  serviceClassic.classlist.toggle(".service-content--active");
  serviceClassicItem.classlist.toggle("service-item--active");
});
