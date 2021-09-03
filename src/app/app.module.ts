import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogModule } from '../log/log.module';
import config from '../../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
