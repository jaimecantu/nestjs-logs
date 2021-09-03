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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.logTypes = exports.microservices = void 0;
const typeorm_1 = require("typeorm");
var microservices;
(function (microservices) {
    microservices["ROLE"] = "role";
    microservices["USER"] = "user";
    microservices["COMPANY"] = "company";
    microservices["GROUP"] = "group";
    microservices["SESSION"] = "session";
    microservices["NOTIFICATION"] = "notification";
    microservices["CERTIFICATION"] = "certification";
    microservices["EVALUATION"] = "evaluation";
    microservices["HOMEWORK"] = "homework";
    microservices["DOCUMENT"] = "document";
    microservices["MODULE"] = "module";
    microservices["COURSE"] = "course";
    microservices["CATEGORY"] = "category";
})(microservices = exports.microservices || (exports.microservices = {}));
var logTypes;
(function (logTypes) {
    logTypes["ERROR"] = "error";
    logTypes["SUCCESS"] = "success";
})(logTypes = exports.logTypes || (exports.logTypes = {}));
let Log = class Log {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: logTypes }),
    __metadata("design:type", String)
], Log.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Log.prototype, "statusCode", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: microservices }),
    __metadata("design:type", String)
], Log.prototype, "microservice", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Log.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Log.prototype, "task", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Log.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
    }),
    __metadata("design:type", typeorm_1.Timestamp)
], Log.prototype, "logDate", void 0);
Log = __decorate([
    typeorm_1.Entity()
], Log);
exports.Log = Log;
//# sourceMappingURL=log.entity.js.map