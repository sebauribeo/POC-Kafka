import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JournalModule } from './journal/journal.module';

@Module({
  imports: [
    JournalModule,
    MongooseModule.forRoot('mongodb://localhost/Journal'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
