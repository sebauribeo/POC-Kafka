import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConfig } from 'src/helpers/producer.helper';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ClientKafka',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: KafkaConfig.clientId,
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
          producer: {
            retry: {
              retries: 1,
              initialRetryTime: 100,
            },
          },
        },
      },
    ]),
  ],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}
