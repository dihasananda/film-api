import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';

@Module({
  controllers: [FilmsController],
})
export class FilmsModule {}
