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
exports.CreateOgrenciDto = void 0;
const class_validator_1 = require("class-validator");
class CreateOgrenciDto {
    ad;
    soyad;
    sinif;
    email;
    sifre;
    tcKimlikNo;
}
exports.CreateOgrenciDto = CreateOgrenciDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Ad metin olmalıdır.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Ad alanı boş bırakılamaz.' }),
    __metadata("design:type", String)
], CreateOgrenciDto.prototype, "ad", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Soyad metin olmalıdır.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Soyad alanı boş bırakılamaz.' }),
    __metadata("design:type", String)
], CreateOgrenciDto.prototype, "soyad", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Sınıf tam sayı olmalıdır.' }),
    (0, class_validator_1.Min)(1, { message: 'Sınıf en az 1 olmalıdır.' }),
    (0, class_validator_1.Max)(4, { message: 'Sınıf en fazla 4 olabilir.' }),
    __metadata("design:type", Number)
], CreateOgrenciDto.prototype, "sinif", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Geçerli bir e-posta adresi giriniz.' }),
    __metadata("design:type", String)
], CreateOgrenciDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Şifre metin olmalıdır.' }),
    (0, class_validator_1.MinLength)(6, { message: 'Şifre en az 6 karakter olmalıdır.' }),
    __metadata("design:type", String)
], CreateOgrenciDto.prototype, "sifre", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'TC Kimlik No metin olmalıdır.' }),
    (0, class_validator_1.Length)(11, 11, { message: 'TC Kimlik No 11 haneli olmalıdır.' }),
    __metadata("design:type", String)
], CreateOgrenciDto.prototype, "tcKimlikNo", void 0);
//# sourceMappingURL=create-ogrenci.dto.js.map