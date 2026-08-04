import { PrismaService } from '../prisma/prisma.service';
import { CreateOgrenciDto } from './dto/create-ogrenci.dto';
import { OgrenciResponseDto } from './dto/ogrenci-response.dto';
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<OgrenciResponseDto[]>;
    getById(id: number): Promise<OgrenciResponseDto | null>;
    create(dto: CreateOgrenciDto): Promise<OgrenciResponseDto>;
}
