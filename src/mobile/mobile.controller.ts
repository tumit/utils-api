import { Controller, Get, Param } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('mobile')
export class MobileController {

  constructor(private cardService: CardService) {}

  @Get('/name-card/:name/:mobileNo')
  cardName(@Param('name') name: string, @Param('mobileNo') mobileNo: string): string {
      return this.cardService.nameCard(name, mobileNo)
  }

}
