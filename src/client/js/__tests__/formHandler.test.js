import { handleSubmit } from "../formHandler";

window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        polarity: "polarity",
        subjectivity: "subjectivity",
        text: "This is a text"
      })
  });
});

describe("Testing the function", () => {
  test("fetch mock data and check its function", () => {
    document.body.innerHTML = `
      <test>
        <form>
          <input id="url" type="text" >
          <input id="btn" type="submit" value="submit">
        </form>
        <div id="results"></div>
      </test>`;

      const url = document.getElementById("url")
      const btn = document.getElementById("btn")
      const result = document.getElementById("results")

      url.value = "http://blog.com"
      handleSubmit(url.value, btn)
        .then(() => {
          expect(result.innerHTML).toEqual("<p>Polarity: polarity</p><p>subjectivity: subjectivity</p><p>text: The is a text</p>")
        })

  })
})
