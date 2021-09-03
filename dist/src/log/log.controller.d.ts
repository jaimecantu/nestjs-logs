import { LogService } from './log.service';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    create(type: string, statusCode: number, microservice: string, user: number, task: string, message: string): Promise<import("./entities/log.entity").Log>;
    healthcheck(): Promise<any>;
    findAll(): Promise<import("./entities/log.entity").Log[]>;
    findOne(microservice: string): Promise<import("./entities/log.entity").Log[]>;
}
