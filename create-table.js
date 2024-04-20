import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//     console.log("Tabela apagada com sucesso!");
// })

sql`
    CREATE TABLE aprendendonode.videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        content TEXT,
        duration INTEGER
    )
`.then(() => {
    console.log('Tabela criada com sucesso!');
})