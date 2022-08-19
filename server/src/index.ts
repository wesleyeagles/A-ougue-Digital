import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();
    

    const app = express()
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false,
        })
    });

    await apolloServer.start()
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log("Server started on localhost:4000")
    });




    {/*
    const emFork = orm.em.fork();
    const post = emFork.create(Post, { title: 'My first post' } as RequiredEntityData<Post>);
    await emFork.persistAndFlush(post); // <-- use the fork instead of global

     const posts = await emFork.find(Post, {})
    console.log(posts)
    */}
};


main().catch((err) => {
    console.log(err)
});
