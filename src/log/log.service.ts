import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { Log } from './entities/log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const os = require('os');

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRespository: Repository<Log>,
  ) {}

  async create(data): Promise<Log> {
    return this.logRespository.save(data);
  }

  async findAll(): Promise<Log[]> {
    return this.logRespository.find();
  }

  async findOne(microservice: string): Promise<Log[]> {
    return this.logRespository.find({ where: { microservice: microservice } });
  }

  async healthcheck(): Promise<any> {
    return {
      status: 1,
      service_name: 'cima-logs-microservice',
      version: '0.0.1',
      message: 'Health check OK',
      hostname: os.hostname(),
    };
  }
}
