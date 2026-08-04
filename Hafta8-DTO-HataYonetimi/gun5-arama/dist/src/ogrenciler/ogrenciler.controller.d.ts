import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciQueryDto } from './dto/ogrenci-query.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
interface SayfaliOgrenciler {
    veri: OgrenciResponseDto[];
    sayfalama: {
        toplamKayit: number;
        toplamSayfa: number;
        mevcutSayfa: number;
        limit: number;
    };
}
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(query: OgrenciQueryDto): Promise<SayfaliOgrenciler>;
    getById(id: number): Promise<OgrenciResponseDto>;
    create(dto: CreateOgrenciDto): Promise<OgrenciResponseDto>;
    remove(id: number): Promise<{
        mesaj: string;
    }>;
}
export {};
