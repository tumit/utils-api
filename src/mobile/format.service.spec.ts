import { Test, TestingModule } from '@nestjs/testing';
import { FormatService } from './format.service';

describe('FormatService', () => {
  let service: FormatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormatService],
    }).compile();

    service = module.get<FormatService>(FormatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // input => process => output : AAA 
  it('mobileFormat', () => {
    // * arrange
    const mobileNo = '0891234567'
    // * act
    const result = service.mobileFormat(mobileNo)
    // * assert
    expect(result).toEqual('Tel. 089-123-4567')
  })

});
