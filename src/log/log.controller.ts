import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  create(
    @Body('type') type: string,
    @Body('statusCode') statusCode: number,
    @Body('microservice') microservice: string,
    @Body('user') user: number,
    @Body('task') task: string,
    @Body('message') message: string,
  ) {
    return this.logService.create({
      type,
      statusCode,
      microservice,
      user,
      task,
      message,
    });
  }

  @Get('healthcheck')
  healthcheck() {
    return this.logService.healthcheck();
  }

  @Get()
  findAll() {
    return this.logService.findAll();
  }

  @Get(':microservice')
  findOne(@Param('microservice') microservice: string) {
    return this.logService.findOne(microservice);
  }
}
