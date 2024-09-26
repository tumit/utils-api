import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormatController } from './format/format.controller';

@Module({
  imports: [],
  controllers: [AppController, FormatController],
  providers: [AppService],
})
export class AppModule {}
