import { Injectable } from '@nestjs/common';

@Injectable()
export class MailRepository {
  constructor() {}

  async send(name: string, mail: string): Promise<void> {
    console.log(`Send Mail to: ${mail} - Client: ${name}`);
  }
}
