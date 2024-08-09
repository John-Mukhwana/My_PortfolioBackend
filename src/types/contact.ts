export interface ContactFormData {
    recipient(recipient: any, subject: string, message: string): unknown;
    name: string;
    email: string;
    phoneNumber: number;
    subject: string;
    message: string;
  }
  