import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("arquive")
  getFile(@Res({ passthrough: true }) response: Response) {
    return this.appService.getFile(response);
  }
}
