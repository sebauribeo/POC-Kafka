import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JournalDTO } from './models/journal.dto';
import { Journal } from './interfaces/journal.interface';

@Injectable()
export class JournalService {
  public logger = new Logger(JournalService.name);

  constructor(
    @InjectModel('Journal') private readonly journalModel: Model<Journal>,
  ) {}

  async create(journal: JournalDTO): Promise<Journal> {
    try {
      const newJournal = new this.journalModel(journal);
      this.logger.verbose('Save data');
      this.logger.debug(JSON.stringify(journal));
      return await newJournal.save();
    } catch (e) {
      this.logger.error(e);
    }
  }
}
