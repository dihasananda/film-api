import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FilterFilmDto {
    @IsOptional()
    title: string;
    
    @IsOptional()
    author: string;
    
    @IsOptional()
    category: string;
    
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    min_year: string;

    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    max_year: string;
}