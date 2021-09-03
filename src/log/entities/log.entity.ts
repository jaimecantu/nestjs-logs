import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

export enum microservices {
  ROLE = 'role',
  USER = 'user',
  COMPANY = 'company',
  GROUP = 'group',
  SESSION = 'session',
  NOTIFICATION = 'notification',
  CERTIFICATION = 'certification',
  EVALUATION = 'evaluation',
  HOMEWORK = 'homework',
  DOCUMENT = 'document',
  MODULE = 'module',
  COURSE = 'course',
  CATEGORY = 'category',
}

export enum logTypes {
  ERROR = 'error',
  SUCCESS = 'success',
}

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: logTypes })
  type: logTypes;

  @Column()
  statusCode: number;

  @Column({ type: 'enum', enum: microservices })
  microservice: microservices;

  @Column()
  user: number;

  @Column()
  task: string;

  @Column()
  message: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  logDate: Timestamp;
}
