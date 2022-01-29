namespace Validations {
  export const validateString = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf()) ? false : true;
  };
}

console.log(Validations.validateString("ale"));
