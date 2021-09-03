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
exports.LogController = void 0;
const common_1 = require("@nestjs/common");
const log_service_1 = require("./log.service");
let LogController = class LogController {
    constructor(logService) {
        this.logService = logService;
    }
    create(type, statusCode, microservice, user, task, message) {
        return this.logService.create({
            type,
            statusCode,
            microservice,
            user,
            task,
            message,
        });
    }
    healthcheck() {
        return this.logService.healthcheck();
    }
    findAll() {
        return this.logService.findAll();
    }
    findOne(microservice) {
        return this.logService.findOne(microservice);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('type')),
    __param(1, common_1.Body('statusCode')),
    __param(2, common_1.Body('microservice')),
    __param(3, common_1.Body('user')),
    __param(4, common_1.Body('task')),
    __param(5, common_1.Body('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number, String, String]),
    __metadata("design:returntype", void 0)
], LogController.prototype, "create", null);
__decorate([
    common_1.Get('healthcheck'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LogController.prototype, "healthcheck", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LogController.prototype, "findAll", null);
__decorate([
    common_1.Get(':microservice'),
    __param(0, common_1.Param('microservice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LogController.prototype, "findOne", null);
LogController = __decorate([
    common_1.Controller('log'),
    __metadata("design:paramtypes", [log_service_1.LogService])
], LogController);
exports.LogController = LogController;
//# sourceMappingURL=log.controller.js.map