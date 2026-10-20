import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, type Schema as MongooseSchema } from "mongoose";
import { Field, ObjectType, ID } from "@nestjs/graphql";


@Schema()
@ObjectType()
export class Book extends Document {
    @Field(() => ID)
    id: string;

    @Prop({ required: true })
    @Field()
    title: string;

    @Prop()
    @Field({ nullable: true })
    description?: string;

    @Prop({ required: true })
    @Field()
    author: string;
}

export const BookSchema: MongooseSchema = SchemaFactory.createForClass(Book)


