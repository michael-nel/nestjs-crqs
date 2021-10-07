import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateClientCommand } from './commands';
import { CreateClientDto } from './interfaces/client-dto.interfaces';
import { Client } from './models/client.model';
import { GetClientById, GetClientsQuery } from './queries';

@Controller('client')
export class ClientController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() dto: CreateClientDto) {
    return this.commandBus.execute(
      new CreateClientCommand(dto.name, dto.document, dto.mail),
    );
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.queryBus.execute(new GetClientById(id));
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.queryBus.execute(new GetClientsQuery());
  }
}
