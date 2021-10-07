import { Client } from '../models/client.model';

export class CreateClientMailEvent {
  constructor(public readonly client: Client) {}
}

export class DeleteClientEvent {
  constructor(public readonly id: string) {}
}
