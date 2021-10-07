import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DeleteClientEvent } from '..';

@EventsHandler(DeleteClientEvent)
export class DeleteClientHandler implements IEventHandler<DeleteClientEvent> {
  handle(event: DeleteClientEvent) {
    console.log('Client Deleted');
  }
}
