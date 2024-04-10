import { updateUserStorage } from "./updateUserStorage";

const warningInputs = (inputName, setWarning, image) => {
  const inputs = document.querySelectorAll(inputName)
  const inputValues = Object.values(inputs).map(({value}) => value)
  const result = inputValues.every((value) => value.trim() !== '');
  setWarning(!result)
  
  if (result) {
    updateUserStorage([...inputValues , image])
  }

  return !!result
}

export { warningInputs }