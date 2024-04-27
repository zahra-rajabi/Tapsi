let classic = document.querySelector(".service-content-classic");
// let telephone = document.querySelector();
// let line = document.querySelector(".service-content-line");
// let motor = document.querySelector(".service-content-motor");
// let auto = document.querySelector(".service-content-auto");
// let plus = document.querySelector(".service-content-plus");
// let hamyar = document.querySelector(" .service-content-hamyar");

let serviceContent = document.querySelector(".service-content-box").children;

setInterval(function () {
  for (const element of serviceContent) {
    if (element.classList.contains("service-content-classic")) {
      element.classList.add("non-active");
    } else if (element.classList.contains("service-content-telephone")) {
      element.classList.toggle("active");
    } else if (element.classList.contains("service-content-line")) {
      element.classList.toggle("active");
    } else if (element.classList.contains("service-content-motor")) {
      element.classList.toggle("active");
    } else if (element.classList.contains("service-content-auto")) {
      element.classList.toggle("active");
    } else if (element.classList.contains("service-content-plus")) {
      element.classList.toggle("active");
    } else if (element.classList.contains("service-content-hamyar")) {
      element.classList.toggle("active");
    }
  }
}, 1000);
