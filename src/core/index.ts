import { Module } from '@nestjs/common';
import { CoreService } from './services';

@Module({
  imports: [],
  controllers: [],
  providers: [CoreService],
})
export class CoreModule {}
