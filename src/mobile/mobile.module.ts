import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { CardService } from './card.service';

@Module({
  providers: [FormatService, CardService]
})
export class MobileModule {}
