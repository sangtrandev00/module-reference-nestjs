import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';
import { ExampleService } from './example/example.service';

@Module({
  imports: [ExampleModule],
  controllers: [AppController],
  providers: [AppService, ExampleService],
})
export class AppModule { }
