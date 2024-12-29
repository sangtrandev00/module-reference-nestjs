import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ExampleService } from './example/example.service';

@Injectable()
export class AppService {
  constructor(private moduleRef: ModuleRef) { }

  useDynamicService() {
    const dynamicService = this.moduleRef.get(ExampleService);
    return dynamicService.doSomething(); // Gọi phương thức của SomeService
  }
}
