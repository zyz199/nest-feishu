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
exports.getMonorepoGroupDto = exports.searchMonorepoGroupDto = exports.addMonorepoGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class addMonorepoGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '营销组件库' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '业务线' }),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "bizTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], addMonorepoGroupDto.prototype, "bizId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'test' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], addMonorepoGroupDto.prototype, "type", void 0);
exports.addMonorepoGroupDto = addMonorepoGroupDto;
class searchMonorepoGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], searchMonorepoGroupDto.prototype, "bizId", void 0);
exports.searchMonorepoGroupDto = searchMonorepoGroupDto;
class getMonorepoGroupDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], getMonorepoGroupDto.prototype, "id", void 0);
exports.getMonorepoGroupDto = getMonorepoGroupDto;
//# sourceMappingURL=monorepoGroup.dto.js.map