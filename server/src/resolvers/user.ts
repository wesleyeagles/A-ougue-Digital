import { RequiredEntityData } from "@mikro-orm/core";
import { User } from "src/entities/User";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@Resolver()
export class UserResolver {
    @Mutation(() => String)
    async register(
        @Arg('options') options: UsernamePasswordInput,
        @Ctx() {emFork}: MyContext
    ) {
        const user = emFork.create(User, {username: options.username} as RequiredEntityData<User>)
        await emFork.persistAndFlush(user)
        return "Hello World"
        
    }
}