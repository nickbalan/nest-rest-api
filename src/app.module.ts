import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SancksModule } from './snacks/snack.module';

@Module({
  imports: [SancksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
