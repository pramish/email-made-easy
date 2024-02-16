import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

/**
 * @description Creates an email transporter before sending an email. Needs to provide service, email, and password
 * @param service string. By default, it's gmail
 * @param email string. This is a user email
 * @param password string. This is a user password
 * @returns Transporter<SMTPTransport.SentMessageInfo>
 */

export function createEmailTransporter(
  email: string,
  password: string,
  service?: string,
): Transporter<SMTPTransport.SentMessageInfo> {
  return nodemailer.createTransport({
    service,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });
}
