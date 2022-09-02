function validator(validatorName, value) {
  switch (validatorName) {
    case "inputName":
      const namePattern = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;
      return namePattern.test(value);

    case "inputSurname":
      const patternOneSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;
      const patternDoubleSurname =
        /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+-[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;

      if (patternOneSurname.test(value) || patternDoubleSurname.test(value)) {
        return true;
      }
      break;

    case "inputDept":
      const deptPattern = /^[.A-Za-ząćęłńóśźżĆŁÓŚŹŻ -]+$/;
      return deptPattern.test(value);

    case "inputTel":
      const pattern = /^\(\d\d\) \d{2} \d{2} \d{3}$/;
      return pattern.test(value);

    case "inputMobile":
      const patternMobile = /^[0-9]{3} [0-9]{3} [0-9]{3}$/;
      if (patternMobile.test(value) || value === '') {
        return true
      }
      break;
    default:
      throw new Error('unknown validator name!')
  }
}

export default validator;
