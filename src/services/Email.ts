import { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import { createEmailTransporter } from '../utils/Email';

import { IEmailService } from '../types/Service/Email';

export class EmailService implements IEmailService {
  private readonly email: string;
  private readonly password: string;
  private emailTransporter: Transporter<SMTPTransport.SentMessageInfo>;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.emailTransporter = createEmailTransporter(this.email, this.password);
  }
  /**
   * Sends an email asynchronously to the specified recipient.
   *
   * @param receiver The email address of the recipient.
   * @param emailSubject The subject of the email.
   * @param emailContent The content of the email.
   * @returns A Promise that resolves to a string indicating the status of the email sending process.
   */

  async sendEmail(
    receiver: string,
    emailSubject: string,
    emailContent: string,
  ): Promise<SMTPTransport.SentMessageInfo> {
    return await this.emailTransporter.sendMail({
      from: this.email,
      to: receiver,
      subject: emailSubject,
      text: emailContent,
    });
  }
}
