import { Controller, Get, Param } from '@nestjs/common';
import { mobileFormat } from './format.fn';

// rest controller
@Controller('format')
export class FormatController {

  @Get('/mobile-no/:mobileNo') // rest config
  getMobileFormat(@Param() param: { mobileNo: string }): string { // rest fn
      return mobileFormat(param.mobileNo) // biz 
  }

}
