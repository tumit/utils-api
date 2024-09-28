import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';
import { CommaSplitPipe } from './comma-split.pipe';
import { MobileService } from './mobile.service';

@Controller('mobile')
export class MobileController {

  constructor(
    private cardService: CardService,
    private mobileService: MobileService
  ) {}

  @Get('/name-card/:name/:mobileNo')
  cardName(@Param('name') name: string, @Param('mobileNo') mobileNo: string): string {
      return this.cardService.nameCard(name, mobileNo)
  }

  @Get('/blocked-mobile-nos/:mobileNos')
  blockedMobileNos(@Param('mobileNos', CommaSplitPipe) mobileNos: string[]): string {
    return this.mobileService.blockedMobileNos(mobileNos)
  }  

}
