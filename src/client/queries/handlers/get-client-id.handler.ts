import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ClientRepository } from '../../repository/client.repository';
import { GetClientById } from '../';

@QueryHandler(GetClientById)
export class GetClientByIdHandler implements IQueryHandler<GetClientById> {
  constructor(private readonly repository: ClientRepository) {}

  async execute(query: GetClientById) {
    return this.repository.findById(query.id);
  }
}
