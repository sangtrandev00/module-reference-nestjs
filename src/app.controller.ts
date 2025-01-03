import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  useDyanmicService(): string {
    return this.appService.useDynamicService();
  }

  @Get('do-something')
  doSomething(): string {
    return this.appService.doSomething();
  }
}
