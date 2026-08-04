import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<OgrenciResponseDto[]>;
    testHata(): never;
    getById(id: number): Promise<OgrenciResponseDto>;
    create(dto: CreateOgrenciDto): Promise<OgrenciResponseDto>;
    remove(id: number): Promise<{
        mesaj: string;
    }>;
}
