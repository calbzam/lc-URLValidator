import { FieldValidationResult } from 'lc-form-validation';

const defaultInvalidMessage = 'Invalid URL';
export const VALIDATION_TYPE = 'URL';

const iSValidURL = (input: string): boolean => checkURL(input) === true;

function checkURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

export const validateURL = (value: any): FieldValidationResult => {
  let valid: boolean = false;

  valid = iSValidURL(value);

  const result: FieldValidationResult = new FieldValidationResult();

  result.type = VALIDATION_TYPE;
  result.succeeded = valid;
  result.errorMessage = valid ? '' : defaultInvalidMessage;

  return result;
};
