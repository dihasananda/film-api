import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilterFilmDto } from './dto/filter-film.dto';

@Controller('films')
export class FilmsController {
    constructor(private filmsService: FilmsService) {}

    @Get()
    getFilms(@Query() payload: FilterFilmDto) {
        return this.filmsService.getFilms(payload)
    }

    @Get('/:id')
    getFilm(@Param('id') id: string) {
        return this.filmsService.getFilm(id);
    }

    @Post()
    createFilm(@Body() payload: CreateFilmDto) {
        return this.filmsService.createFilm(payload);
    } 

    @Put('/:id')
    updateFilm(
        @Param('id') id: string,
        @Body() payload: UpdateFilmDto,
    ) {
        return this.filmsService.updateFilm(id, payload);
    }

    @Delete('/:id')
    deleteFilm(@Param('id') id: string) {
        return this.filmsService.deleteFilm(id);
    }
}
