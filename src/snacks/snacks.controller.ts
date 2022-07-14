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
  postSnack(
    @Body('title') snackTitle: string,
    @Body('description') snackDes: string,
    @Body('price') snackPrice: number,
    @Body('shopLocation') snackLoc: string,
  ): any {
    const generatedId = this.snacksService.addSnacks(
      snackTitle,
      snackDes,
      snackPrice,
      snackLoc,
    );
    return { id: generatedId };
  }

  @Get()
  getAllSnack() {
    return this.snacksService.getSnacks();
  }

  @Get(':id')
  getSnack(@Param('id') snackId: string) {
    return this.snacksService.getOneSnack(snackId);
  }

  @Patch(':id')
  updateSnack(
    @Param('id') snackId: string,
    @Body('title') snackTitle: string,
    @Body('description') snackDescription: string,
    @Body('price') snackPrice: number,
    @Body('shopLocation') snackLocation: string,
  ) {
    this.snacksService.updateSanck(
      snackId,
      snackTitle,
      snackDescription,
      snackPrice,
      snackLocation,
    );
    return null;
  }

  @Delete(':id')
  deleteSnacks(@Param('id') snackId: string) {
    this.snacksService.deleteSnack(snackId);
    return null;
  }
}
