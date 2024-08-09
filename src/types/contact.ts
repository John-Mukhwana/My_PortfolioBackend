export interface ContactFormData {
    recipient(recipient: any, subject: string, message: string): unknown;
    name: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
  }
  