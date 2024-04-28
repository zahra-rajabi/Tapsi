let serviceContent = document.querySelectorAll(".service-content");
let serviceList = document.querySelector(".service-list");
let index = 0;
setInterval(function () {
  if (index == 6) {
    index = 0;
    serviceContent[6].classList.remove("active");
    serviceContent[index].classList.remove("non-active");
  } else if (index == 0) {
    serviceContent[index].classList.add("non-active");
    serviceContent[index + 1].classList.add("active");
    index++;
  } else {
    index++;
    serviceContent[index - 1].classList.remove("active");
    serviceContent[index].classList.add("active");
  }
}, 5000);
