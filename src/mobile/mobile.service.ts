import { Injectable } from '@nestjs/common';
import { FormatService } from './format.service';

@Injectable()
export class MobileService {
  
  constructor(private formatService: FormatService) { }

  blockedMobileNos(mobileNos: string[]): string {
      return mobileNos.map(mobileNo => this.formatService.mobileFormat(mobileNo)).join(', ')
  }  

}
