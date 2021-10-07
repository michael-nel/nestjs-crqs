export class CreateClientCommand {
  constructor(
    public readonly name: string,
    public readonly document: string,
    public readonly mail: string,
  ) {}
}

export class SendMailClientCommand {
  constructor(public readonly name: string, public readonly mail: string) {}
}

export class DeleteClientCommand {
  constructor(public readonly id: string) {}
}
