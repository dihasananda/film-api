import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), FilmsModule],
})
export class AppModule {}
