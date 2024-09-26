import { Test, TestingModule } from '@nestjs/testing';
import { CardService } from './card.service';
import { FormatService } from './format.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardService, FormatService],
    }).compile();

    service = module.get<CardService>(CardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should show nameCard', () => {
    // * arrange
    const name = 'John'
    const mobileNo = '0891234567'
    // * act
    const result = service.nameCard(name, mobileNo)
    // * assert
    expect(result).toEqual('John: Tel. 089-123-4567')
  })

});
