/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './movies.dto';

@Injectable()
export class MoviesService {
    constructor(private readonly prismaService: PrismaService) {}
    
    async findAll(): Promise<MovieDto[]> {
        return this.prismaService.movie.findMany();
    }
    
    async getMovies(director: string) {
        return await this.prismaService.$queryRaw('exec SP_Movies ' + director);
    }

    async create(
        @Body() { director, movieName, yearReleased }: MovieDto,
    ): Promise<MovieDto> {
        return this.prismaService.movie.create({
            data: { director, movieName, yearReleased },
        });
    }
}
