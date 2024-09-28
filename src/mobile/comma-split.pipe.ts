import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CommaSplitPipe implements PipeTransform {
  // 0891234567,0898765432 transform => [0891234567,0898765432]
  transform(value: string) {
    return value.split(',');
  }
}
