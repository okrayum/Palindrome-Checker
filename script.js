// select elements
const input = document.getElementById("input")
const form = document.querySelector("form")
const result = document.getElementById("result")

// build state objects
const state = {
  input: ""
}

const handleChange = (e) => {
  let {name, value} = e.target
  state[name] = value
  
}

// add eventListener for input
input.addEventListener("input", handleChange)

const handleSubmit = (e) =>{
  e.preventDefault()
  palindrome(state.input)
}

form.addEventListener("submit", handleSubmit)

// palindrome checker from pcc
function palindrome(str){
  // creating my regex 
  let myRegex = /[a-z0-9]/g;

  // to make lowercase and alphanumeric
  let newStr = str.toLowerCase().match(myRegex);

  // comparing regex string to reversed string
  if (newStr.join("") === newStr.reverse().join("")) {
    input.value = ""
    result.innerHTML = `Hooray, ${state.input} is a Palindrome!`;
    // result.innerHTML = `Hooray, ${newStr.join("")} is a Palindrome.`;
    state.input = ""
  } else {
    input.value = ""
    result.innerHTML = `So sorry, ${state.input} is not a Palindrome.`;
    state.input = ""
  }
}
