import { Injectable } from '@nestjs/common';
import { FormatService } from './format.service';

@Injectable()
export class CardService {
  
  constructor(private formatService: FormatService) {}

  nameCard(name: string, mobileNo: string): string {
      return `${name}: ${this.formatService.mobileFormat(mobileNo)}`
  }
}

