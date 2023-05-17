import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() { }

  @Get()
  @Render('index')
  homepage() {
    return {
      message: `Home page, i'm so excited`
    }
  }
}