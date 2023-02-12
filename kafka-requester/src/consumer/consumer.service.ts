import { Injectable, Logger } from '@nestjs/common';
import { ConsumerModel } from 'src/helpers/models/consumer.models';

@Injectable()
export class ConsumerService {
  public logger = new Logger(ConsumerService.name);

  async consumer(message: ConsumerModel): Promise<void> {
    try {
      this.logger.verbose('Received data...');
      this.logger.debug(JSON.stringify(message));
    } catch (e) {
      this.logger.error(e);
    }
  }
}
