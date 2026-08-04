"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OgrenciMapper = void 0;
class OgrenciMapper {
    static toResponseDto(entity) {
        return {
            id: entity.id,
            ad: entity.ad,
            soyad: entity.soyad,
            sinif: entity.sinif,
            email: entity.email,
            olusturma: entity.olusturma,
        };
    }
    static toResponseDtoList(entities) {
        return entities.map((entity) => this.toResponseDto(entity));
    }
}
exports.OgrenciMapper = OgrenciMapper;
//# sourceMappingURL=ogrenci.mapper.js.map