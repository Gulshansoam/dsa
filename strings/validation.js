function checkPassword(value) {
  if (typeof value === "string" && value.length > 0) {
    const minLength = 8;
    const maxLength = 15;
    const lowercase = /[a-z]/g;
    const uppercase = /[A-Z]/g;
    const numberCheck = /[0-9]/g;
    const specialChar = /[~!@#$%^&*()_+-<>?/'";:=|.,*`]/g;

    if (value.length < minLength || !value.length > maxLength) {
      return "Password must be greater 8 cahracters and less than 15 characters";
    }
    if (!lowercase.test(value)) {
      return "Password must have smaller case character";
    }
    if (!uppercase.test(value)) {
      return "Password must have upper case character";
    }
    if (!numberCheck.test(value)) {
      return "Password must have number";
    }
    if (!specialChar.test(value)) {
      return "Password must have special character";
    }

    return "Password is Strong Enough";
  } else {
    return "Password Input has wrong Input Type";
  }
}

const password = checkPassword("Gulsh.12345");

// console.log(password, "<password>");

//   **************************Email-validation****************************//

function checkEmail(emailValue) {
  if (typeof emailValue === "string") {
    const emailReg = /^[A-Za-z0-9.%+-?]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    if (!emailReg.test(emailValue)) {
      return "Please Enter Valid Email";
    } else {
      return "Valid Email";
    }
  } else {
    return "Please Enter Valid Email";
  }
}

let email= checkEmail("gulshanSoam@gma.il.com");
console.log(email);