function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topic = document.querySelector("#topic");
  let apiKey = "5do93bc0b836c98t67cd86dfeaa4ff3f";
  let context =
    "You are an AI assistant knowledgeable about good poetry and bad poetry. You write only bad poetry full of cliches.";
  let prompt = `Provide a bad poem full of cliches, no more than 30 words long, about ${topic.value}. Separate each line of the poem with a <br>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<div class = "blink">⌛ Generating a poem about ${topic.value}...</div>`;
  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", generatePoem);
