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
const ogrenci_query_dto_1 = require("./dto/ogrenci-query.dto");
const ogrenci_mapper_1 = require("./mappers/ogrenci.mapper");
let OgrencilerController = class OgrencilerController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(query) {
        const { ara, sinif, sayfa = 1, limit = 10, sirala = 'asc' } = query;
        const where = {};
        if (sinif !== undefined) {
            where.sinif = sinif;
        }
        if (ara) {
            where.OR = [
                { ad: { contains: ara, mode: 'insensitive' } },
                { soyad: { contains: ara, mode: 'insensitive' } },
                { email: { contains: ara, mode: 'insensitive' } },
            ];
        }
        const [toplamKayit, ogrenciler] = await Promise.all([
            this.prisma.ogrenci.count({ where }),
            this.prisma.ogrenci.findMany({
                where,
                skip: (sayfa - 1) * limit,
                take: limit,
                orderBy: { ad: sirala },
            }),
        ]);
        return {
            veri: ogrenci_mapper_1.OgrenciMapper.toResponseDtoList(ogrenciler),
            sayfalama: {
                toplamKayit,
                toplamSayfa: Math.ceil(toplamKayit / limit),
                mevcutSayfa: sayfa,
                limit,
            },
        };
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
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ogrenci_query_dto_1.OgrenciQueryDto]),
    __metadata("design:returntype", Promise)
], OgrencilerController.prototype, "getAll", null);
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