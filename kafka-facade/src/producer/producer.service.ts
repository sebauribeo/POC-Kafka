import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { ProducerModel } from 'src/helpers/models/producer.models';
import { KafkaConfig } from 'src/helpers/producer.helper';

@Injectable()
export class ProducerService implements OnModuleInit {
  public logger = new Logger(ProducerService.name);

  constructor(
    @Inject('ClientKafka') private readonly _clientKafka: ClientKafka,
  ) {}
  async onModuleInit(): Promise<boolean> {
    await this._clientKafka.connect();
    return true;
  }

  async publish(message: ProducerModel): Promise<boolean> {
    this.logger.verbose('Data received');
    try {
      const response = this.emitToKafkaCore(message);

      if (response === true) {
        this.emitToKafkaHandler(message);
      }
      return true;
    } catch (e) {
      this.logger.error(e);
      return false;
    }
  }

  emitToKafkaCore(data: ProducerModel): boolean {
    this._clientKafka.emit(KafkaConfig.kafkaCoreTopic, data);
    this.logger.debug(JSON.stringify(data));
    return true;
  }

  emitToKafkaHandler(data: ProducerModel): boolean {
    this._clientKafka.emit(KafkaConfig.kafkaHandlerTopic, data);
    this.logger.debug('Saved Document...');
    return true;
  }
}
