import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() {emFork}: MyContext ) {
        return emFork.find(Post, {})
    }
}