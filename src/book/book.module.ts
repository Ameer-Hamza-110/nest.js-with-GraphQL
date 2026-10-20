import { Module } from '@nestjs/common';
import { BookService } from './book.service.js';
import { BookResolver } from './resolvers/book.resolver.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './model/book.model.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  providers: [BookService, BookResolver]
})
export class BookModule { }
