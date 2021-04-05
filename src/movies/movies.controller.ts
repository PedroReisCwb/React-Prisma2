/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovieDto } from './movies.dto';
import { MoviesService } from './movies.service'; 

@Controller('movies')
export class MoviesController {
    constructor(
        private readonly moviesService: MoviesService
    ) {}

    @Get()
    findAll(): Promise<MovieDto[]> {
        return this.moviesService.findAll();
    }

    @Get('movie/:director')
    getMovies(@Param('director') director: string) {
        return this.moviesService.getMovies(director);
    }

    @Post()
    create( @Body() data: MovieDto ) {
        return this.moviesService.create(data);
    }
}
