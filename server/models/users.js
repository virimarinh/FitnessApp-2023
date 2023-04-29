const data = require('../data/users.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'users';

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}

async function getAll(){
    const col = await collection();
    const items = await col.find().toArray();
    return items;
}

function getById(id) {
    return data.users.find(users => users.id === id);
}

function add(item) {
    item.id = data.users.length + 1;
    data.users.push(item);
}

function update(item) {
    const index = data.users.findIndex(users => users.id === item.id);
    data.users[index] = item;
}

function deleteItem(id){
    const index = data.users.findIndex(users => users.id === id);
    data.users.splice(index, 1);
}

function search(searchTerm){
    return data.users.filter(users => {
        return users.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                users.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                users.handle.toLowerCase().includes(searchTerm.toLowerCase());
        });
}

module.exports = {
    getAll, 
    getById, 
    add, 
    update,
    deleteItem,
    search
};