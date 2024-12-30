import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getCore(): string {
    return `<h1>Core</h1>`;
  }
}
