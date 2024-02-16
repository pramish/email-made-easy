import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface IEmailService {
  sendEmail: (receiver: string, emailSubject: string, emailContent: string) => Promise<SMTPTransport.SentMessageInfo>;
}
