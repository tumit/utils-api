import { Injectable } from '@nestjs/common';

@Injectable()
export class FormatService {

  prefix = 'Tel.'

  // string => string
  mobileFormat(mobileNo: string): string {
      // 089 123 4568
      const m1 = mobileNo.slice(0, 3) // 089
      const m2 = mobileNo.slice(3, 6)
      const m3 = mobileNo.slice(6)
      return `${this.prefix} ${m1}-${m2}-${m3}`
  }

}
