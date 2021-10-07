import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ClientRepository } from '../../repository/client.repository';
import { CreateClientCommand } from '..';
import { Client } from '../../models/client.model';

@CommandHandler(CreateClientCommand)
export class CreateClientHandler
  implements ICommandHandler<CreateClientCommand>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: ClientRepository,
  ) {}

  async execute(command: CreateClientCommand): Promise<Client> {
    const client = new Client(command.name, command.document, command.mail);

    const clientEvent = this.publisher.mergeObjectContext(
      await this.repository.add(client),
    );

    clientEvent.sendMail();
    clientEvent.commit();
    return client;
  }
}
