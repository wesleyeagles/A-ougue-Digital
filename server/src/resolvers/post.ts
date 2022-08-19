import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() {emFork}: MyContext ) {
        return emFork.find(Post, {})
    }

    @Query (() => Post, {nullable: true})
    post(
        @Arg('id', () => Int) id: number,
        @Ctx() {emFork}: MyContext ) {
            return emFork.findOne(Post, { id })
        }
}