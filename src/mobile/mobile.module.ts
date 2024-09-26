import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { CardService } from './card.service';
import { MobileController } from './mobile.controller';

@Module({
  providers: [FormatService, CardService],
  controllers: [MobileController]
})
export class MobileModule {}
