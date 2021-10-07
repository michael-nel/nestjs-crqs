interface ClientDto {
  name: string;
  document: string;
  mail: string;
}

export interface CreateClientDto extends ClientDto {}
export interface UpdateCLientDto extends ClientDto {}
