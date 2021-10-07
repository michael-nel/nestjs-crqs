import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientRepository } from '../../repository/client.repository';
import { GetClientsQuery } from '../';

@QueryHandler(GetClientsQuery)
export class GetClientHandler implements IQueryHandler<GetClientsQuery> {
  constructor(private readonly repository: ClientRepository) {}

  async execute(query: GetClientsQuery) {
    return this.repository.findAll();
  }
}
