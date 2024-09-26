import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormatController } from './format/format.controller';
import { MobileModule } from './mobile/mobile.module';

@Module({
  imports: [MobileModule],
  controllers: [AppController, FormatController],
  providers: [AppService],
})
export class AppModule {}
