function validator (validatorName, value) {
  switch (validatorName) {
    case 'inputName':
    {
      const namePattern = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/
      return namePattern.test(value)
    }
    case 'inputSurname':
    {
      const patternOneSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/
      const patternDoubleSurname = /^[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+-[A-ZĆÓŚŁŻŹĆ][a-ząćęłńóśźż]+$/

      if (patternOneSurname.test(value) || patternDoubleSurname.test(value)) {
        return true
      }
      break
    }
    case 'inputDept':
    {
      const deptPattern = /^[.A-Za-ząćęłńóśźżĆŁÓŚŹŻ -]+$/
      return deptPattern.test(value)
    }
    case 'inputTel':
    {
      const pattern1 = /^(\+\d\d )?\(\d\d\)\s\d{2}(\s|-)\d{2}(\s|-)\d{3}$/
      const pattern2 = /^(\+\d\d )?\(\d\d\)\s\d{3}(\s|-)\d{2}(\s|-)\d{2}$/

      if (pattern1.test(value) || pattern2.test(value)) {
        return true
      }
      break
    }
    case 'inputMobile':
      {
        const patternMobile = /^[0-9]{3} [0-9]{3} [0-9]{3}$/
        if (patternMobile.test(value) || value === '') {
          return true
        }
      }
      break
    default:
      throw new Error('unknown validator name!')
  }
}

export default validator
