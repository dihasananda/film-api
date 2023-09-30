import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFilmDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    author: string;
    
    @IsNotEmpty()
    category: string;
    
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    year: string;
}