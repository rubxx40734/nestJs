import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoreService } from './core/services';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly coreService: CoreService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  testFn(): string {
    return this.appService.testFn();
  }

  @Get('core')
  testCore(): string {
    return this.coreService.getCore();
  }
}
