import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { ClientController } from './client.controller';
import { ClientRepository } from './repository/client.repository';
import { MailRepository } from './repository/mail.repository';
import { QueryHandlers } from './queries/handlers';
import { ClientSagas } from './sagas/client.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [ClientController],
  providers: [
    ClientRepository,
    MailRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    ClientSagas,
  ],
})
export class ClientModule {}
