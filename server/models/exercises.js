const e = require('express');
const data = require('../data/exercises.json');

function getExercises(){
    return data.exercises;
}

function getExerciseById(id) {
    return data.exercises.find(exercises => exercise.id === id);
}

function addExercise(exercise) {
    exercise.id = data.exercises.length + 1;
    data.exercises.push(exercise);
}

function updateExercise(exercise) {
    const index = data.exercises.findIndex(p => p.id === exercise.id);
    data.exercises[index] = exercise;
}

function deleteExercise(id) {
    const index = data.exercises.findIndex(p => p.id === id);
    data.exercises.splice(index, 1);
}

// function searchExercises(searchTerm) {
//     return data.exercises.filter(exercise => {
//         return  exercise.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
//             product.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
//             product.brand.toLowerCase().includes(searchTerm.toLowerCase());
//     });
// }

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    //searchProducts
};