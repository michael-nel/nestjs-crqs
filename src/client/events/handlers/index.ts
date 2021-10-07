import { SendMailClientHandler } from './create-client.handlers';
import { DeleteClientHandler } from './deleted-client-handlers';

export const EventHandlers = [SendMailClientHandler, DeleteClientHandler];
