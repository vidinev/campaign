export class ValidationService {
  public static getValidatorErrorMessage(validatorName: string, validatorValue?: any, messages?: any) {
    const config = {
      required: 'Please fill in this field',
      url: 'Please enter a valid URL',
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      min: `Minimum value must be greater or equal ${validatorValue}`,
      max: `Maximum value mast be less ${validatorValue}`
    };

    return messages[validatorName] || config[validatorName];
  }
}
