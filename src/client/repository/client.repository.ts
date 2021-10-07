import { Injectable } from '@nestjs/common';
import { Client } from '../models/client.model';

@Injectable()
export class ClientRepository {
  private clients: Client[];

  constructor() {
    this.clients = [];
  }

  async add(client: Client): Promise<Client> {
    console.log(client);
    this.clients = [...this.clients, client];
    return client;
  }

  async delete(id: string): Promise<void> {
    this.clients = this.clients.filter((x) => x.id !== id);
  }

  async findById(id: string): Promise<Client> {
    return this.clients.find((x) => x.id === id);
  }

  async findAll(): Promise<Client[]> {
    return this.clients;
  }
}
