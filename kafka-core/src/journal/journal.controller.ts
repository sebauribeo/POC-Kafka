import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaConfig } from 'src/helpers/journal.helpers';
import { JournalService } from './journal.service';
import { JournalDTO } from './models/journal.dto';

@Controller('')
export class JournalController {
  constructor(private journalService: JournalService) {}

  @MessagePattern(KafkaConfig.kafkaMicroTopic)
  async consumer(@Body() journal: JournalDTO) {
    const document = await this.journalService.create(journal);
    return document;
  }
}
