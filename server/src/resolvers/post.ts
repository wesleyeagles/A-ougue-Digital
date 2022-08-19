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

    @Mutation (() => Post, {nullable: true})
    async updatePost(
        @Arg('id', () => Int) id: number,
        @Arg('title', () => String, { nullable: true}) title: string,
        @Ctx() {emFork}: MyContext ) {
            const post = await emFork.findOne(Post, {id});
            if (!post) {
                return null
            }

            if (typeof title !== 'undefined') {
                post.title = title
                await emFork.persistAndFlush(post)
            }
            
            return post;
    }

    @Mutation (() => Boolean)
    async deletePost(
        @Arg('id', () => Int) id: number,
        @Ctx() {emFork}: MyContext ) {
            await emFork.nativeDelete(Post, { id });
            return true;
    }
}