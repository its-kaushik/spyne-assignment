import {
  countryCodeRequired,
  createValidation,
  emailRequired,
  phoneNumberRequired,
  stringRequired,
} from '../../validations';

export const createUserValidation = createValidation({
  name: stringRequired,
  email: emailRequired,
  phone: phoneNumberRequired,
  countryCode: countryCodeRequired,
});
