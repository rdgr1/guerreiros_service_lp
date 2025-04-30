import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailDTO } from './send-mail.dto';
@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(dto: SendMailDTO) {
    const { name, email, subject, message } = dto;

    await this.mailerService.sendMail({
      to: 'destino@exemplo.com', // onde o email vai ser recebido
      subject: `[Contato Angular] ${subject}`,
      text: `
            Nome: ${name}
            E-mail: ${email}
            
            Mensagem:
            ${message}
          `,
    });

    return { message: 'E-mail enviado com sucesso!' };
  }
}
