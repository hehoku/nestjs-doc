import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    if (!cat) {
      console.log('Cannot create an empty cat');
      return;
    }
    console.log(cat);
    this.cats.push(cat);
    console.log(this.cats);
  }

  findAll(): Cat[] {
    console.log(this.cats);
    return this.cats;
  }
}
