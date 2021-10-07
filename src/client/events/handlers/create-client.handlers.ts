import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreateClientMailEvent } from '..';

@EventsHandler(CreateClientMailEvent)
export class SendMailClientHandler
  implements IEventHandler<CreateClientMailEvent>
{
  handle(event: CreateClientMailEvent) {
    console.log(
      `Created Name: ${event.client.name}, Document: ${event.client.document}`,
    );
  }
}
