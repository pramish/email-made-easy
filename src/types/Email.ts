export interface IEmail {
  email: string;
  password: string;
}

export interface ISendEmail extends IEmail {
  service: string;
  emailContent: string;
}
