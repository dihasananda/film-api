import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('films')
export class FilmsController {
    constructor(private filmsService: FilmsService) {}

    @Get()
    getAllFilms() {
        return this.filmsService.getAllFilms()
    }

    @Get('/:id')
    getBook(@Param('id') id: string) {
        return this.filmsService.getBook(id);
    }

    @Post()
    createFilm(@Body('payload') payload: CreateFilmDto) {
        console.log(payload);
        // return this.filmsService.createFilm(payload);
    } 

    @Put('/:id')
    updateFilm(
        @Param('id') id: string,
        @Body('payload') payload: UpdateFilmDto,
    ) {
        return this.filmsService.updateFilm(id, payload);
    }

    @Delete('/:id')
    deleteFilm(@Param('id') id: string) {
        return this.filmsService.deleteFilm(id);
    }
}
