import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { CardService } from './card.service';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';

@Module({
  providers: [FormatService, CardService, MobileService],
  controllers: [MobileController]
})
export class MobileModule {}
