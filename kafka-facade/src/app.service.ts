import { Injectable, Logger } from '@nestjs/common';
import { ProducerModel } from './helpers/models/producer.models';
import { ProducerService } from './producer/producer.service';

@Injectable()
export class AppService {
  public logger = new Logger(AppService.name);

  constructor(private readonly kafkaProducerService: ProducerService) {}
  publishMessage(message: ProducerModel): Promise<boolean> {
    return this.kafkaProducerService.publish(message);
  }
}
