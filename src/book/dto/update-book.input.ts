import { Field, InputType, ID, PartialType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { CreateBookInput } from "./create-book.input.js";

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
    @Field(() => ID)
    @IsNotEmpty()
    id: string;
}