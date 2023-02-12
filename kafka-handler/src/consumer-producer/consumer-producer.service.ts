import { Injectable, Logger } from '@nestjs/common';
import { Kafka, Partitioners, Producer } from 'kafkajs';
import { KafkaConfig } from 'src/helpers/consumer-producer.helpers';
import { HandlerModel } from 'src/helpers/models/consumer-producer.models';

@Injectable()
export class ConsumerService {
  private readonly clientKafka: Kafka;
  private producer: Producer;
  public logger = new Logger(ConsumerService.name);

  constructor() {
    this.clientKafka = new Kafka({
      clientId: KafkaConfig.clientId,
      brokers: [KafkaConfig.kafkaUrl],
    });

    this.producer = this.clientKafka.producer({
      createPartitioner: Partitioners.LegacyPartitioner,
    });
  }

  async consumer(message: HandlerModel): Promise<void> {
    try {
      this.logger.verbose('Received data...');
      this.logger.debug(JSON.stringify(message));
      await this.producerMessage(message);
    } catch (e) {
      this.logger.error(e);
    }
  }

  async producerMessage(message: HandlerModel): Promise<void> {
    await this.producer.connect();
    try {
      await this.producer.send({
        topic: KafkaConfig.kafkaRequesterTopic,
        messages: [{ value: JSON.stringify(message) }],
      });
      this.logger.verbose('Sent to Requester...');
    } catch (e) {
      this.logger.error(e);
    }
  }
}
