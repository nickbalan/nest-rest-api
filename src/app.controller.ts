import {
  Controller,
  Get,
  Header,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuards } from './auth/local-auth.guards';
import { AuthenticatedGuards } from './auth/local-authenticated.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuards)
  @Post('login')
  login(@Request() req): any {
    return {msg: 'You are logged in.'};
  }

  @UseGuards(AuthenticatedGuards)
  @Get('authenticated')
  getHello(@Request() req): string {
    return req.user;
  }
}
