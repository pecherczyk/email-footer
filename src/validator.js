function validator(validatorName, value) {
  switch (validatorName) {
    case "inputName":
      const namePattern = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;
      return namePattern.test(value);

    case "inputSurname":
      const patternOneSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;
      const patternDoubleSurname =
        /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+ - [A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/;

      if (patternOneSurname.test(value) || patternDoubleSurname.test(value)) {
        return true;
      }
      break;

    case "inputDept":
      const deptPattern = /^[.A-Za-ząćęłńóśźżĆŁÓŚŹŻ -]+$/;
      return deptPattern.test(value);

    case "inputTel":
      const pattern = /^[. ()+0-9we]{9,20}$/;
      return pattern.test(value);

    default:
      throw new Error('unknown validator name!')
  }
}

export default validator;