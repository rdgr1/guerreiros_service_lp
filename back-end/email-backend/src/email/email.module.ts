import { Controller, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  providers: [EmailService],
  controllers: [EmailController],
  imports: [
    MailerModule.forRoot({
      transport:{
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'rodger.dev777@gmail.com',
          pass: 'nezk qxrr rzqf ureg',
        },
      },
      defaults: {
          from: '"Teste" <rodger.dev777@gmail.com>',
      },
    }),
  ],
})
export class EmailModule {}