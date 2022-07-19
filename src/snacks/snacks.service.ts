import { Injectable, NotFoundException } from '@nestjs/common';
import { Snacks } from './snacks.model';

@Injectable()
export class SnacksService {
  private snacks: Snacks[] = [];
  addSnacks(
    title: string,
    description: string,
    price: number,
    shopLocation: string,
  ) {
    const snackId = Math.random().toString();
    const newSnack = new Snacks(
      snackId,
      title,
      description,
      price,
      shopLocation,
    );
    this.snacks.push(newSnack);
    return snackId;
  }

  getSnacks() {
    return [...this.snacks];
  }

  getOneSnack(snackId: string) {
    const snack = this.findSnack(snackId);
    return { ...snack };
  }

  updateSanck(
    snackId: string,
    title: string,
    description: string,
    price: number,
    shopLocation: string,
  ) {
    const [snack, index]  = this.findSnack(snackId);
    const updatedSanck = {...snack};
    if (title) {
      updatedSanck.title = title;
    }
    if (description) {
      updatedSanck.description = description;
    }
    if (price) {
      updatedSanck.price = price;
    }
    if (shopLocation) {
      updatedSanck.shopLocation= shopLocation;
    }
    this.snacks[index] = updatedSanck;
  }

  deleteSnack(snackId: string) {
    const index = this.findSnack(snackId)[1];
    this.snacks.splice(index, 1);
  }

  private findSnack(id: string): [Snacks, number] {
    const snackIndex = this.snacks.findIndex(snack => snack.id === id);
    const snack = this.snacks[snackIndex];
    if (!snack) {
      throw new NotFoundException('Can not find Snacks');
    }
    return [snack, snackIndex];
  }
 
}
