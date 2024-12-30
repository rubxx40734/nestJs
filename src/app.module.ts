import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user';
import { CoreService } from './core/services';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, CoreService],
})
export class AppModule {}
