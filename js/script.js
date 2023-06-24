const serviceClassicItem = Document.querySelector(".service-item-classic");
const serviceTelephoneItem = Document.querySelector(".service-item-telephone");
const serviceLineItem = Document.querySelector(".service-item-line");
const serviceMotorItem = Document.querySelector(".service-item-motor");
const serviceAutoItem = Document.querySelector(".service-item-auto");
const servicePlusItem = Document.querySelector(".service-item-plus");
const serviceHamyarItem = Document.querySelector(".service-item-hamyar");
const serviceClassicContent = Document.querySelector(
  ".service-content-classic"
);
const serviceTelephoneContent = Document.querySelector(
  "service-content-telephone"
);
const serviceLineContent = Document.querySelector(".service-content-line");
const serviceMotorContent = Document.querySelector("service-content-motor");
const serviceAutoContent = Document.querySelector(".service-content-auto");
const servicePlusContent = Document.querySelector(".service-content-plus");
const serviceHamyarContent = Document.querySelector(".service-content-hamyar");

serviceClassicItem.addEventListener("click", function () {
  serviceClassicContent.classlist.toggle("service-content--active");
});
serviceTelephoneItem.addEventListener("click", function () {
  serviceTelephoneContent.classlist.toggle("service-content--active");
});
serviceLineItem.addEventListener("click", function () {
  serviceLineContent.classlist.toggle("service-content--active");
});
serviceMotorItem.addEventListener("click", function () {
  serviceMotorContent.classlist.toggle("service-content--active");
});
serviceAutoItem.addEventListener("click", function () {
  serviceAutoContent.classlist.toggle("service-content--active");
});
servicePlusItem.addEventListener("click", function () {
  servicePlusContent.classlist.toggle("service-content--active");
});
serviceHamyarItem.addEventListener("click", function () {
  serviceHamyarContent.classlist.toggle("service-content--active");
});
