import { Ogrenci } from '@prisma/client';
import { OgrenciResponseDto } from '../dto/ogrenci-response.dto';
export declare class OgrenciMapper {
    static toResponseDto(entity: Ogrenci): OgrenciResponseDto;
    static toResponseDtoList(entities: Ogrenci[]): OgrenciResponseDto[];
}
