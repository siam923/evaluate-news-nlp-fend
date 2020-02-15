function handleSubmit(url, btn) {

  console.log("::: Form Submitted :::")

  fetch("http://localhost:8081/api_response", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(function(res) {
      const polarity = document.createElement("p");
      const subjectivity = document.createElement("p");
      const text = document.createElement("p")
      polarity.textContent = `Polarity: ${res.polarity}`
      subjectivity.textContent = `subjectivity: ${res.subjectivity}`
      text.textContent = `text: ${res.text}`

      document.getElementById('results').appendChild(polarity)
      document.getElementById('results').appendChild(subjectivity)
      document.getElementById('results').appendChild(text)

    })
    .catch((error) => {
      console.log(error)
      document.getElementById('results').innerHTML = "<p>Error occured</p>";
    })
}


export { handleSubmit }
