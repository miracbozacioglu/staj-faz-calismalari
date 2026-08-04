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
exports.OgrencilerController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_ogrenci_dto_1 = require("./dto/create-ogrenci.dto");
const ogrenci_mapper_1 = require("./mappers/ogrenci.mapper");
let OgrencilerController = class OgrencilerController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const ogrenciler = await this.prisma.ogrenci.findMany();
        return ogrenci_mapper_1.OgrenciMapper.toResponseDtoList(ogrenciler);
    }
    testHata() {
        throw new Error('Bu kasıtlı bir hatadır!');
    }
    async getById(id) {
        const ogrenci = await this.prisma.ogrenci.findUnique({ where: { id } });
        if (!ogrenci) {
            throw new common_1.NotFoundException(`${id} numaralı öğrenci bulunamadı.`);
        }
        return ogrenci_mapper_1.OgrenciMapper.toResponseDto(ogrenci);
    }
    async create(dto) {
        const mevcut = await this.prisma.ogrenci.findUnique({
            where: { email: dto.email },
        });
        if (mevcut) {
            throw new common_1.ConflictException('Bu e-posta adresi zaten kayıtlı.');
        }
        const yeni = await this.prisma.ogrenci.create({
            data: {
                ad: dto.ad,
                soyad: dto.soyad,
                sinif: dto.sinif,
                email: dto.email,
                sifreHash: `hash_${dto.sifre}`,
                tcKimlikNo: dto.tcKimlikNo,
            },
        });
        return ogrenci_mapper_1.OgrenciMapper.toResponseDto(yeni);
    }
    async remove(id) {
        const ogrenci = await this.prisma.ogrenci.findUnique({ where: { id } });
        if (!ogrenci) {
            throw new common_1.NotFoundException(`${id} numaralı öğrenci bulunamadı.`);
        }
        await this.prisma.ogrenci.delete({ where: { id } });
        return { mesaj: 'Öğrenci silindi.' };
    }
};
exports.OgrencilerController = OgrencilerController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('test/hata'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OgrencilerController.prototype, "testHata", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ogrenci_dto_1.CreateOgrenciDto]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "remove", null);
exports.OgrencilerController = OgrencilerController = __decorate([
    (0, common_1.Controller)('ogrenciler'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OgrencilerController);
//# sourceMappingURL=ogrenciler.controller.js.map