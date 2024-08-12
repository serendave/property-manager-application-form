interface ContactInformation {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface PersonalInformation {
  gender: string;
  address: string;
  postOffice: string;
  dateOfBirth: string;
}

interface LegalInformation {
  residence: string;
  city: string;
  income: number;
}

export interface MultiStepFormData {
  contact: ContactInformation;
  personal: PersonalInformation;
  legal: LegalInformation;
}
