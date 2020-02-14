import { validURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'

alert("I am on");

const form = document.querySelector("#main-form");
const urlInput = document.querySelector("#url");
const submitBtn = document.querySelector("#main-form input[type=submit]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = urlInput.value;
  //alert("button clicked")

  if (validURL(url)) {
    submitBtn.value = "Waiting for response...";
    handleSubmit(url, submitBtn);
    //alert("button clicked")
  } else {
    alert("type correct url")
    console.log('not a valid url')
  }
})

export {
  validURL,
  handleSubmit
}
