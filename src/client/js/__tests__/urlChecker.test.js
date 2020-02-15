import {validURL} from "../urlChecker"

describe("Is Valid Url", () => {
  test("It will return true", () => {
    let urls = [
      "https://google.com",
      "https://www.udacity.com/blog"
    ]

    urls.forEach((link) => {
      expect(validURL(url)).toBeTruthy;
    })

  })

  test("It will return false", () => {
    let urls = [
      "httpsgoogle.com",
      "google.ab.."
    ]

    urls.forEach((link) => {
      expect(validURL(url)).toBeFalsy;
    })

  })

})
