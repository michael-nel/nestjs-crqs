import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { MailRepository } from '../../repository/mail.repository';
import { SendMailClientCommand } from '..';

@CommandHandler(SendMailClientCommand)
export class SendClientMailHandler
  implements ICommandHandler<SendMailClientCommand>
{
  constructor(private readonly repository: MailRepository) {}

  async execute(command: SendMailClientCommand): Promise<void> {
    await this.repository.send(command.name, command.mail);
  }
}
