import { PrismaService } from '../prisma/prisma.service';
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<any>;
    getById(id: string): Promise<any>;
    create(veri: {
        ad: string;
        soyad: string;
        sinif: number;
    }): Promise<any>;
}
