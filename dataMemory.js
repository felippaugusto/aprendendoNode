import { randomUUID } from "node:crypto";

export class DataBaseMemory {
    #videos = new Map();

    read(query) {
        return Array.from(this.#videos.entries()).map(videoArray => {
            const id = videoArray[0];
            const data = videoArray[1];

            return {
                id,
                ...data
            }
        }).filter(video => {
            if(query) {
                return video.title.includes(query);
            }

            return true;
        })
    }

    create(video) {
        const id = randomUUID();

        this.#videos.set(id, video);
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}