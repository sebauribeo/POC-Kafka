import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer-producer.controller';
import { ConsumerService } from './consumer-producer.service';

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
