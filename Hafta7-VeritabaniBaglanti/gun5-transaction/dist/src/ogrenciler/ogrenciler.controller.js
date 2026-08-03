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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OgrencilerController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OgrencilerController = class OgrencilerController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.ogrenci.findMany({
            include: { kayitlar: true },
        });
    }
    async createWithoutTransaction(veri) {
        const ogrenci = await this.prisma.ogrenci.create({
            data: { ad: veri.ad, soyad: veri.soyad, sinif: veri.sinif },
        });
        if (!veri.dersAdi) {
            throw new Error('Ders adı zorunludur!');
        }
        const kayit = await this.prisma.kayit.create({
            data: { dersAdi: veri.dersAdi, ogrenciId: ogrenci.id },
        });
        return { ogrenci, kayit };
    }
    async createWithTransaction(veri) {
        return await this.prisma.$transaction(async (tx) => {
            const ogrenci = await tx.ogrenci.create({
                data: { ad: veri.ad, soyad: veri.soyad, sinif: veri.sinif },
            });
            if (!veri.dersAdi) {
                throw new Error('Ders adı zorunludur!');
            }
            const kayit = await tx.kayit.create({
                data: { dersAdi: veri.dersAdi, ogrenciId: ogrenci.id },
            });
            return { ogrenci, kayit };
        });
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
    (0, common_1.Post)('transactionsiz'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "createWithoutTransaction", null);
__decorate([
    (0, common_1.Post)('transactionli'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "createWithTransaction", null);
exports.OgrencilerController = OgrencilerController = __decorate([
    (0, common_1.Controller)('ogrenciler'),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], OgrencilerController);
//# sourceMappingURL=ogrenciler.controller.js.map