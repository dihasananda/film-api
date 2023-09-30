import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid4 } from 'uuid'
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Injectable()
export class FilmsService {
    private films: any [] = [];

    getAllFilms(): any[] {
        return this.films;
    }

    getBook(id: string) {
        const filmIdx = this.findFilmById(id);
        return this.films[filmIdx];
    }

    createFilm(createFilmDto: CreateFilmDto) {
        const { title, author, category, year } = createFilmDto;
        this.films.push({
            id: uuid4(),
            title: title,
            author,
            category,
            year,
        })
    }

    updateFilm(id: string, updateFilmDto: UpdateFilmDto) {
        const { title, author, category, year } = updateFilmDto
        const filmIdx = this.findFilmById(id);
        this.films[filmIdx].title = title;
        this.films[filmIdx].author = author;
        this.films[filmIdx].category = category;
        this.films[filmIdx].year = year;
    }

    findFilmById(id: string) {
        const filmIdx = this.films.findIndex((film) => film.id === id);
        if(filmIdx === -1) {
            throw new NotFoundException(`Film with id ${id} is not found`);
        }

        return filmIdx;
    }

    deleteFilm(id: string) {
        const filmIdx = this.findFilmById(id);
        this.films.splice(filmIdx, 1);
    }
}