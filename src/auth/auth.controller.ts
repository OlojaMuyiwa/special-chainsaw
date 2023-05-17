import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
//import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignUpDto, LoginDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signup(signUpDto)
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard(['jwt', 'github', 'google']))
  @Get('home')
  async home() {
    return 'jfo'
  }


}
