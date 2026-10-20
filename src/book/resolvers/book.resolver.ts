import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from '../book.service.js';
import { Book } from '../model/book.model.js';
import { CreateBookInput } from '../dto/create-book.input.js';
import { UpdateBookInput } from '../dto/update-book.input.js';

@Resolver()
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book], { name: "getAllBooks" })
    findAll() {
        return this.bookService.findAll()
    }

    @Query(() => Book, { name: "getBook" })
    findOne(@Args('id', { type: () => String }) id: string) {
        return this.bookService.findOne(id)
    }

    @Mutation(() => Book)
    create(@Args('input') input: CreateBookInput) {
        return this.bookService.create(input)
    }

    @Mutation(() => Book)
    updateBook(@Args('input') input: UpdateBookInput) {
        return this.bookService.update(input)
    }

    @Mutation(() => Boolean)
    deleteBook(@Args('id', { type: () => String }) id: string) {
        return this.bookService.remove(id)
    }
}
