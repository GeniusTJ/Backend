const {db,table} = require('./db.config');
//create user
const createUser =async(data={}) =>{
    const params = {
        tableName: table,
        items:data
    }
    try {
        await db.put(params).promise()
        return{success: true}
    } catch (error) {
        return{success: false}
    }
}

module.exports = {createUser};