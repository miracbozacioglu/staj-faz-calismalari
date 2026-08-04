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
exports.OgrenciQueryDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class OgrenciQueryDto {
    ara;
    sinif;
    sayfa = 1;
    limit = 10;
    sirala = 'asc';
}
exports.OgrenciQueryDto = OgrenciQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Arama terimi metin olmalıdır.' }),
    __metadata("design:type", String)
], OgrenciQueryDto.prototype, "ara", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'Sınıf tam sayı olmalıdır.' }),
    (0, class_validator_1.Min)(1, { message: 'Sınıf en az 1 olmalıdır.' }),
    (0, class_validator_1.Max)(4, { message: 'Sınıf en fazla 4 olabilir.' }),
    __metadata("design:type", Number)
], OgrenciQueryDto.prototype, "sinif", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'Sayfa tam sayı olmalıdır.' }),
    (0, class_validator_1.Min)(1, { message: 'Sayfa en az 1 olmalıdır.' }),
    __metadata("design:type", Number)
], OgrenciQueryDto.prototype, "sayfa", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'Limit tam sayı olmalıdır.' }),
    (0, class_validator_1.Min)(1, { message: 'Limit en az 1 olmalıdır.' }),
    (0, class_validator_1.Max)(100, { message: 'Limit en fazla 100 olabilir.' }),
    __metadata("design:type", Number)
], OgrenciQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['asc', 'desc'], { message: "Sıralama 'asc' veya 'desc' olmalıdır." }),
    __metadata("design:type", String)
], OgrenciQueryDto.prototype, "sirala", void 0);
//# sourceMappingURL=ogrenci-query.dto.js.map