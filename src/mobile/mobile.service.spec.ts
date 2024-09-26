import { Test, TestingModule } from '@nestjs/testing';
import { MobileService } from './mobile.service';
import { FormatService } from './format.service';

describe('MobileService', () => {
  let service: MobileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MobileService, FormatService],
    }).compile();

    service = module.get<MobileService>(MobileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('blockedMobileNos', () => {
    // * arrange
    const mobileNos = ['0891234567', '0892345678', '0893456789']
    // * act
    const result = service.blockedMobileNos(mobileNos)
    // * assert
    expect(result).toEqual('Tel. 089-123-4567, Tel. 089-234-5678, Tel. 089-345-6789')
  })

});
