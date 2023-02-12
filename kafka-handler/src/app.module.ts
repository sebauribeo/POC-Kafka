import { Module } from '@nestjs/common';
import { ConsumerModule } from './consumer-producer/consumer-producer.module';

@Module({
  imports: [ConsumerModule],
})
export class AppModule {}
