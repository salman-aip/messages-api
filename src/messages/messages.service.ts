import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageRepository } from './messages.repositories';

@Injectable()
export class MessagesService {
  //added repository dependency
  constructor(private readonly messageRepositories: MessageRepository) {}

  create(createMessageDto: CreateMessageDto) {
    return this.messageRepositories.create(createMessageDto.content);
  }

  findAll() {
    return this.messageRepositories.findAll();
  }

  findOne(id: number) {
    return this.messageRepositories.findOne(id);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
