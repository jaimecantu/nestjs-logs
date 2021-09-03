import { Injectable } from '@nestjs/common';
import { config as dotenv } from 'dotenv';
dotenv();
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
