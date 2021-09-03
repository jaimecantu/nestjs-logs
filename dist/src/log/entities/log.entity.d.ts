import { Timestamp } from 'typeorm';
export declare enum microservices {
    ROLE = "role",
    USER = "user",
    COMPANY = "company",
    GROUP = "group",
    SESSION = "session",
    NOTIFICATION = "notification",
    CERTIFICATION = "certification",
    EVALUATION = "evaluation",
    HOMEWORK = "homework",
    DOCUMENT = "document",
    MODULE = "module",
    COURSE = "course",
    CATEGORY = "category"
}
export declare enum logTypes {
    ERROR = "error",
    SUCCESS = "success"
}
export declare class Log {
    id: number;
    type: logTypes;
    statusCode: number;
    microservice: microservices;
    user: number;
    task: string;
    message: string;
    logDate: Timestamp;
}
