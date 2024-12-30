import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World test!';
  }
  testFn(): string {
    return '自己搞一個3000 port function';
  }
}
