const { Database } = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite"

const db = new Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`, (err) => {
            if (err) {
                // Table already created
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin", "admin@example.com", '$2b$10$DcQW9f3CS4VJ5v18.FGDLeD21.AxiFr5Clib8tQUVJqmbyQLyt/4y'])
                db.run(insert, ["user", "user@example.com", '$2b$10$DcQW9f3CS4VJ5v18.FGDLeD21.AxiFr5Clib8tQUVJqmbyQLyt/4y'])
            }
        })

        db.run(`CREATE TABLE post (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            description text,
            image_url text
            )`, (err) => {
            if (err) {

            } else {
                var insert = 'INSERT INTO post (title, description, image_url) VALUES (?,?,?)'
                    // Table already created
                db.run(insert, ["Lenguajes preferidos", "desc", 'image.jpg'])
                    // Table just created, creating some rows
                    //var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                    //db.run(insert, ["admin", "admin@example.com", md5("admin123456")])
                    //db.run(insert, ["user", "user@example.com", md5("user123456")])
            }
        })
    }
})


module.exports = db