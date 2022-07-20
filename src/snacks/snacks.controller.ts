import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Patch,
  Delete,
} from '@nestjs/common';
import { SnacksService } from './snacks.service';

@Controller('snacks')
export class SnacksController {
  constructor(private readonly snacksService: SnacksService) {}

  @Post()
  async postSnack(
    @Body('title') snackTitle: string,
    @Body('description') snackDes: string,
    @Body('price') snackPrice: number,
    @Body('shopLocation') snackLoc: string,
  ) {
    const generatedId = await this.snacksService.addSnacks(
      snackTitle,
      snackDes,
      snackPrice,
      snackLoc,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllSnack() {
    const snacks = await this.snacksService.getSnacks();
    return snacks;
  }

  @Get(':id')
  getSnack(@Param('id') snackId: string) {
    return this.snacksService.getOneSnack(snackId);
  }

  @Patch(':id')
  async updateSnack(
    @Param('id') snackId: string,
    @Body('title') snackTitle: string,
    @Body('description') snackDescription: string,
    @Body('price') snackPrice: number,
    @Body('shopLocation') snackLocation: string,
  ) {
    await this.snacksService.updateSnack(
      snackId,
      snackTitle,
      snackDescription,
      snackPrice,
      snackLocation,
    );
    return null;
  }

  @Delete(':id')
  async deleteSnacks(@Param('id') snackId: string) {
    await this.snacksService.deleteSnack(snackId);
    return null;
  }
}
