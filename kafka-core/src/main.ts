import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaConfig } from './helpers/journal.helpers';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [KafkaConfig.kafkaUrl],
          // ssl: {
          //   rejectUnauthorized: false,
          //   cert: String(process.env.CERT_PEM_ROUTE)
          // },
          // sasl: {
          //   mechanism: 'scram-sha-512',
          //   username: String(process.env.SASL_USERNAME),
          //   password: String(process.env.SASL_PASSWORD)
          // }
        },
        consumer: {
          groupId: KafkaConfig.groupId1,
        },
      },
    },
  );
  app.listen();
}
bootstrap();
