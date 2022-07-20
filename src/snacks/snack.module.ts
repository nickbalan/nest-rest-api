import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SnacksController } from './snacks.controller';
import { SnackSchema } from './snacks.model';
import { SnacksService } from './snacks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Snacks', schema: SnackSchema }]),
  ],
  controllers: [SnacksController],
  providers: [SnacksService],
})
export class SancksModule {}
