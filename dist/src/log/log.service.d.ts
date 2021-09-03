import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';
export declare class LogService {
    private readonly logRespository;
    constructor(logRespository: Repository<Log>);
    create(data: any): Promise<Log>;
    findAll(): Promise<Log[]>;
    findOne(microservice: string): Promise<Log[]>;
    healthcheck(): Promise<any>;
}
