import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async create(message: string) {
    // read from file
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    //generate id's
    const obj_id = Math.floor(Math.random() * 999999);
    const id = Math.floor(Math.random() * 999);

    //store into file
    messages[obj_id] = { id, content: message };

    // write into json file
    await writeFile('messages.json', JSON.stringify(messages));
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }
}
