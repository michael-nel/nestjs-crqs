import { AggregateRoot } from '@nestjs/cqrs';
import { CreateClientMailEvent } from '../events';
import { v4 as uuidv4 } from 'uuid';

export class Client extends AggregateRoot {
  public readonly id: string;
  public readonly name: string;
  public readonly document: string;
  public readonly mail: string;

  constructor(name: string, document: string, mail: string) {
    super();

    this.id = uuidv4();
    this.name = name;
    this.document = document;
    this.mail = mail;
  }

  sendMail() {
    this.apply(new CreateClientMailEvent(this));
  }
}
