import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SendMailClientCommand } from '../commands';
import { CreateClientMailEvent } from '../events';

@Injectable()
export class ClientSagas {
  @Saga()
  createdClient = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CreateClientMailEvent),
      delay(1000),
      map((event) => {
        return new SendMailClientCommand(event.client.name, event.client.mail);
      }),
    );
  };
}
