const messageText=document.getElementById("message")
const textLimit=document.getElementById("textLimit")
var limit =500;
textLimit.textContent=0+"/"+limit;

const messageTextLimitHandler=event=>{
  event.preventDefault()
  const messageTextLength=messageText.value.length;
  textLimit.textContent = messageTextLength+" / "+limit;

  if(messageTextLength < limit){
    textLimit.style.backgroundColor = "transparent"
  }else{
    textLimit.style.backgroundColor = "transparent"
  }
}

messageText.addEventListener("input", messageTextLimitHandler)

let errorBox;

const closeButtonHandler = (event) => {
  event.preventDefault();
  errorBox.remove();
};

const enterValue = (headingPara = "Are you sure!", parameter) => {
  errorBox = document.createElement("section");
  errorBox.className = "error-box";

  const errorBoxContainer = document.createElement("div");
  errorBoxContainer.className = "error-box-container";

  const errorStaticText = document.createElement("h3");
  errorStaticText.className = "error-static-text";
  errorStaticText.innerText = headingPara;

  const errorBoxText = document.createElement("p");
  errorBoxText.innerText = parameter;
  errorBoxText.className = "error-text";

  const buttonElement = document.createElement("button");
  buttonElement.className = "closeBtn";
  buttonElement.innerText = "Close";

  errorBoxContainer.appendChild(errorStaticText);
  errorBoxContainer.appendChild(errorBoxText);
  errorBoxContainer.appendChild(buttonElement);
  errorBox.appendChild(errorBoxContainer);

  buttonElement.addEventListener("click", closeButtonHandler);

  return document.body.append(errorBox);
};

function contactFormSubmitHandler(headingText, textValue) {
  const name = document.formName.name.value;
  const phone = document.formName.phone.value;
  const email = document.formName.email.value;
  let regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)*$/;
  const message = document.formName.message.value;

  if (name.length == "" || name.length == null) {
    enterValue(headingText, "Please enter your name!");
    document.formName.name.focus();
    return false;
  } else if ((headingText, name.trim().length == 0)) {
    enterValue(headingText, "Please enter valid name!");
    return false;
  } else if (phone.length > 11 || phone.length < 9) {
    enterValue(
      headingText,
      "Please enter phone number minimum or maximum 10 digits!"
    );
    return false;
  } else if (!regex.test(email)) {
    enterValue(headingText, "Please enter valid email!");
    return false;
  } else if (message.trim().length < 3) {
    enterValue(headingText, "Please enter minimum 3 letters");
    return false;
  } else {
    enterValue(
      "Your form is successfully submitted!",
      "Thank you for contact us."
    );
    return false;
  }
}
