import { PrismaService } from '../prisma/prisma.service';
export declare class OgrencilerController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<any>;
    createWithoutTransaction(veri: {
        ad: string;
        soyad: string;
        sinif: number;
        dersAdi: string;
    }): Promise<{
        ogrenci: any;
        kayit: any;
    }>;
    createWithTransaction(veri: {
        ad: string;
        soyad: string;
        sinif: number;
        dersAdi: string;
    }): Promise<any>;
}
