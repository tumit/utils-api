import { Test, TestingModule } from '@nestjs/testing';
import { MobileController } from './mobile.controller';
import { CardService } from './card.service';
import { FormatService } from './format.service';
import { MobileService } from './mobile.service';

describe('MobileController', () => {
  let controller: MobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MobileController],
      providers: [CardService, FormatService, MobileService]
    }).compile();

    controller = module.get<MobileController>(MobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
