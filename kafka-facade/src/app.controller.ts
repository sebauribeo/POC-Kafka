import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProducerModel } from './helpers/models/producer.models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('entry')
  async publishData(@Body() data: ProducerModel): Promise<any> {
    return await this.appService.publishMessage(data);
  }
}
