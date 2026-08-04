import { Test, TestingModule } from '@nestjs/testing';
import { OgrencilerController } from './ogrenciler.controller';

describe('OgrencilerController', () => {
  let controller: OgrencilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OgrencilerController],
    }).compile();

    controller = module.get<OgrencilerController>(OgrencilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
