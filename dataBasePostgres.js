import { randomUUID } from "node:crypto";
import { sql } from './db.js'

export class DataBasePostgres {
    async read(query) {
        let videos;

        if(query) {
            videos = await sql`SELECT * FROM aprendendonode.videos WHERE title ILIKE ${'%' + query + '%'}`;
        }
        else {
            videos = await sql`SELECT * FROM aprendendonode.videos`;
        }

        return videos;
    }

    async create(video) {
        const id = randomUUID();
        const { title, content, duration } = video;

        await sql`INSERT INTO aprendendonode.videos (id, title, content, duration) VALUES (${id}, ${title}, ${content}, ${duration})`
    }

    async update(id, video) {
        const idVideo = id;
        const { title, content, duration } = video

        await sql`UPDATE aprendendonode.videos SET id = ${idVideo}, title = ${title}, content = ${content}, duration = ${duration} WHERE id = ${id}`;
    }

    async delete(id) {
        const idVideo = id;

        await sql`DELETE FROM aprendendonode.videos WHERE id = ${idVideo}`;
    }
}