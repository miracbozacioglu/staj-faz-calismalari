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
let OgrencilerController = class OgrencilerController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllRaw() {
        return await this.prisma.ogrenci.findMany();
    }
    async getAll() {
        const ogrenciler = await this.prisma.ogrenci.findMany();
        return ogrenciler.map((o) => ({
            id: o.id,
            ad: o.ad,
            soyad: o.soyad,
            sinif: o.sinif,
            email: o.email,
            olusturma: o.olusturma,
        }));
    }
    async create(dto) {
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
        return {
            id: yeni.id,
            ad: yeni.ad,
            soyad: yeni.soyad,
            sinif: yeni.sinif,
            email: yeni.email,
            olusturma: yeni.olusturma,
        };
    }
};
exports.OgrencilerController = OgrencilerController;
__decorate([
    (0, common_1.Get)('ham'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "getAllRaw", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ogrenci_dto_1.CreateOgrenciDto]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "create", null);
exports.OgrencilerController = OgrencilerController = __decorate([
    (0, common_1.Controller)('ogrenciler'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OgrencilerController);
//# sourceMappingURL=ogrenciler.controller.js.map