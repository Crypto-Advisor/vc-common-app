const { Pool } = require('pg')

const pool = new Pool({
    database: 'vc-common-app'
})

module.exports = {
    query: (text, params, callback) =>{
        return pool.query(text, params, callback)
    },
}