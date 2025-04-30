import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendMailDTO } from './send-mail.dto';

@Controller('email')
export class EmailController {
    constructor(private readonly mailerService: EmailService){}

    @Post('enviar')
    async sendMail(@Body() dto: SendMailDTO){
        console.log('Email Enviado!')
        return this.mailerService.sendMail(dto);
    }
}
