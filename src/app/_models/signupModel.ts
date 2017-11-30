interface SignupContractDataType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: any;
  language?: string;
}

export class SignupModel implements SignupContractDataType {
  constructor( firstName = '',
               lastName = '',
               email = '',
               password = '',
               language = '') {
  }
}