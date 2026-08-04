import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllRaw(): Promise<any>;
    getAll(): Promise<OgrenciResponseDto[]>;
    create(dto: CreateOgrenciDto): Promise<OgrenciResponseDto>;
}
