import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Snacks } from './snacks.model';

@Injectable()
export class SnacksService {
  constructor(
    @InjectModel('Snacks') private readonly snacksModel: Model<Snacks>,
  ) {}

  async addSnacks(
    title: string,
    description: string,
    price: number,
    shopLocation: string,
  ) {
    const newSnack = new this.snacksModel({
      title: title,
      description: description,
      price: price,
      shopLocation: shopLocation,
    });
    const newSnackResult = await newSnack.save();
    /* console.log(newSnackResult); */
    return newSnackResult.id as string;
  }

  async getSnacks() {
    const snacks = await this.snacksModel.find().exec();
    /* console.log(snacks); */
    return snacks.map((snack) => ({
      id: snack.id,
      title: snack.title,
      description: snack.description,
      price: snack.price,
      shopLocation: snack.shopLocation,
    }));
  }

  async getOneSnack(snackId: string) {
    const snack = await this.findSnack(snackId);
    return {
      id: snack.id,
      title: snack.title,
      description: snack.description,
      price: snack.price,
      shopLocation: snack.shopLocation,
    };
  }

  async updateSnack(
    snackId: string,
    title: string,
    description: string,
    price: number,
    shopLocation: string,
  ) {
    const updatedSnack = await this.findSnack(snackId);
    if (title) {
      updatedSnack.title = title;
    }
    if (description) {
      updatedSnack.description = description;
    }
    if (price) {
      updatedSnack.price = price;
    }
    if (shopLocation) {
      updatedSnack.shopLocation = shopLocation;
    }
    updatedSnack.save();
  }

  async deleteSnack(snackId: string) {
    const deleteResult = await this.snacksModel
      .deleteOne({ _id: snackId })
      .exec();
    /* console.log(deleteResult); */
    if (deleteResult.deletedCount === 0) {
      throw new NotFoundException('Could not find Snacks');
    }
  }

  private async findSnack(id: string): Promise<Snacks> {
    let snack;
    try {
      snack = await this.snacksModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find Snacks');
    }
    if (!snack) {
      throw new NotFoundException('Could not find Snacks');
    }
    return snack;
  }
}
