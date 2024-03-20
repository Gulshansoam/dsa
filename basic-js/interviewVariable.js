function checkPassword(value) {
  if (typeof value === "string") {
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

console.log(password, "<password>");
