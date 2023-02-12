import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaConfig } from 'src/helpers/consumer.helpers';
import { ConsumerModel } from 'src/helpers/models/consumer.models';
import { ConsumerService } from './consumer.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern(KafkaConfig.kafkaMicroTopic)
  consumer(@Body() message: ConsumerModel): Promise<void> {
    return this.consumerService.consumer(message);
  }
}
