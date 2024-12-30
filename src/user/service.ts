import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserHello(): string {
    return `<p style="color: red;">Hello 使用者!</p>`;
  }
  postUserHello(): string {
    return 'post demo RRR';
  }
}
