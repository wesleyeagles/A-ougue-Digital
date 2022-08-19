import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { RequiredEntityData } from "@mikro-orm/core";

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

    @Mutation (() => Post)
    async createPost(
        @Arg('title', () => String) title: string,
        @Ctx() {emFork}: MyContext ) {
            const post = emFork.create(Post, {title} as RequiredEntityData<Post>)
            await emFork.persistAndFlush(post); // <-- use the fork instead of global
            return post;
    }
}