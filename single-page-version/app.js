const status = document.querySelector("#status");

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("page-form");

  // Success and Error functions for after the form is submitted

  function remover(element) {
    element.innerHTML = "";
    element.style.animation = "none";
    element.classList = "";
    window.requestAnimationFrame(function () {
      element.style.animation = "status 4s ease forwards";
    });
  }
  function success() {
    form.reset();
    remover(status);
    status.classList.add("success", "status");
    status.innerHTML = "Thanks!";
  }

  function error() {
    remover(status);
    status.classList.add("error", "status");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    console.log("fired");
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// Animations
gsap.from(".navbar", { duration: 1, y: "-100%", ease: "circ" });
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1 });

// //This will be the images MAYBE
// gsap.from(".right", { duration: 1, x: "-100vw", delay: 1, ease: "power2.in" });
AOS.init();
