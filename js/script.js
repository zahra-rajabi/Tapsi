let serviceContent = document.querySelectorAll(".service-content");
let serviceContentArray = Array.from(serviceContent);
let serviceList = document.querySelectorAll(".service-item");
let firstElement = serviceContentArray[0];
let links = document.getElementsByTagName("a");
let index = 0;

setInterval(function () {
  if (index == 6) {
    index = 0;
    serviceList[6].firstElementChild.classList.remove("service-item--active");
    serviceContent[6].classList.remove("active");
    serviceContent[index].classList.remove("non-active");
  } else if (index == 0) {
    serviceContent[index].classList.add("non-active");
    serviceContent[index + 1].classList.add("active");
    index++;
    serviceList[index - 1].firstElementChild.classList.remove(
      "service-item--active"
    );
  } else {
    index++;
    serviceContent[index - 1].classList.remove("active");
    serviceContent[index].classList.add("active");
    serviceList[index - 1].firstElementChild.classList.remove(
      "service-item--active"
    );
  }
  serviceList[index].firstElementChild.classList.add("service-item--active");
}, 6000);

serviceList.forEach(function (element) {
  element.addEventListener("click", function (event) {
    [, ...rest] = serviceContent;
    if (event.target.parentNode.classList.contains("service-item")) {
      event.target.parentNode.firstElementChild.classList.add(
        "service-item--active"
      );
      let href = event.target.parentNode.getAttribute("href");

      let targetElement = document.querySelector(href);

      let targetElementIndex = serviceContentArray.indexOf(targetElement);
      rest.forEach((element) => element.classList.remove("active"));
      if (targetElement == firstElement) {
        firstElement.classList.remove("non-active");
      } else {
        rest.splice(targetElementIndex, 1);

        firstElement.classList.add("non-active");
        targetElement.classList.add("active");
      }

      index = targetElementIndex;
    }
  });
});
