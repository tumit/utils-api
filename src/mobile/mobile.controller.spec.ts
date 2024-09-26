import { Test, TestingModule } from '@nestjs/testing';
import { MobileController } from './mobile.controller';
import { CardService } from './card.service';
import { FormatService } from './format.service';

describe('MobileController', () => {
  let controller: MobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileController],
      providers: [CardService, FormatService]
    }).compile();

    controller = module.get<MobileController>(MobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
