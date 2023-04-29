const data = require('../data/exercises.json');
const { connect, ObjectId } = require('./mongo');

const COLLECTION_NAME = 'exercises';

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
    return data.exercises.find(exercises => exercise.id === id);
}

function add(item) {
    item.id = data.exercises.length + 1;
    data.exercises.push(item);
}

function update(item) {
    const index = data.exercises.findIndex(p => p.id === item.id);
    data.exercises[index] = item;
}

function deleteItem(id) {
    const index = data.exercises.findIndex(p => p.id === id);
    data.exercises.splice(index, 1);
}

function search(searchTerm) {
    return data.exercises.filter(exercise => {
        return  exercise.name.toLowerCase().includes(searchTerm.toLowerCase())  ||
            exercise.location.toLowerCase().includes(searchTerm.toLowerCase())  ||
            exercise.type.toLowerCase().includes(searchTerm.toLowerCase());
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