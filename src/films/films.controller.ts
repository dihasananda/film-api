import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('films')
export class FilmsController {
    @Get('/:name')
    hello(@Param('name') name: string ) {
        return 'Hello World';
    }

    @Post()
    createFilm(@Body('name') name: string) {
        console.log(name);
    }
}
