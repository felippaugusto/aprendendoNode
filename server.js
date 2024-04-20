import { fastify } from 'fastify'
import { DataBasePostgres } from './dataBasePostgres.js'

const server = fastify();
const dbPostgres =  new DataBasePostgres()


server.post("/videos", async (request, response) => {
    const { title, content, duration} = request.body;

    await dbPostgres.create({
        title,
        content,
        duration
    });

    return response.status(201).send();
})

server.get("/videos", async (request) => {
    const query = request.query.search

    return await dbPostgres.read(query);
})

server.put("/videos/:id", (request, response) => {
    const id = request.params.id
    const { title, content, duration} = request.body;

    dbPostgres.update(id, {
        title,
        content,
        duration
    })

    return response.status(204).send();
})

server.delete("/videos/:id", (request, response) => {
    const id = request.params.id;

    dbPostgres.delete(id);
    
    return response.status(204).send();
})

server.listen({
    port: 3000
})