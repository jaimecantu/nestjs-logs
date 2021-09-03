"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const log_entity_1 = require("./entities/log.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const os = require('os');
let LogService = class LogService {
    constructor(logRespository) {
        this.logRespository = logRespository;
    }
    async create(data) {
        return this.logRespository.save(data);
    }
    async findAll() {
        return this.logRespository.find();
    }
    async findOne(microservice) {
        return this.logRespository.find({ where: { microservice: microservice } });
    }
    async healthcheck() {
        return {
            status: 1,
            service_name: 'cima-logs-microservice',
            version: '0.0.1',
            message: 'Health check OK',
            hostname: os.hostname(),
        };
    }
};
LogService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(log_entity_1.Log)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LogService);
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map