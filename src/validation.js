const MAX_LENGTH_MESSAGE = "Max character is ";
const REQUIRED_MESSAGE = "This field is required";

const MAX_LENGTH_TITLE = 80;
const MAX_LENGTH_AUTHOR = 80;
const MAX_LENGTH_BODY = 200;

export const isFormValid = (validationMessage) =>
  Object.values(validationMessage).filter((val) => !val["isValid"]).length ===
  0;

export const getValidationMessage = (name, value) => {
  if (value.trim() === "") {
    return { isValid: false, message: REQUIRED_MESSAGE };
  }

  switch (name) {
    case "title":
      return value.length > MAX_LENGTH_TITLE
        ? {
            isValid: false,
            message: MAX_LENGTH_MESSAGE + MAX_LENGTH_TITLE.toString(),
          }
        : { isValid: true, message: null };
    case "authorName":
      return value.length > MAX_LENGTH_AUTHOR
        ? {
            isValid: false,
            message: MAX_LENGTH_MESSAGE + MAX_LENGTH_AUTHOR.toString(),
          }
        : { isValid: true, message: null };
    case "body":
      return value.length > MAX_LENGTH_BODY
        ? {
            isValid: false,
            message: MAX_LENGTH_MESSAGE + MAX_LENGTH_BODY.toString(),
          }
        : { isValid: true, message: null };

    default:
      return { isValid: true, message: null };
  }
};
