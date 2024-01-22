function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings:
      "You thought life <br />Couldn't get any worse <br />Didn't you? <br />Well, here's some poetry",
    autoStart: true,
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
