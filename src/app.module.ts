import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SancksModule } from './snacks/snack.module';

@Module({
  imports: [SancksModule, MongooseModule.forRoot('mongodb+srv://c5VQW5X:g68vbmatXvFpqHOJ@cluster0.aul3i.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
