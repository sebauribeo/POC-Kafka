import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { KafkaConfig } from 'src/helpers/consumer-producer.helpers';
import { HandlerModel } from 'src/helpers/models/consumer-producer.models';
import { ConsumerService } from './consumer-producer.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern(KafkaConfig.kafkaMicroTopic)
  consumer(@Body() message: HandlerModel): Promise<void> {
    return this.consumerService.consumer(message);
  }
}
