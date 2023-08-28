function filterBooksByRussianN(...names) {
    const filteredBooks = []

    for (const name of names) {
        if (name.includes('н') || name.includes('Н')) {
            filteredBooks.push(name)
        }
    }
    return filteredBooks;
}
const bookNames = ["Таинственный незнакомец", "Три товарища", "Три кота", "Ночь в Лиссабоне", "Таинственный незнакомец", "На подъеме",];
const filteredBooks = filterBooksByRussianN(...bookNames)
console.log(filteredBooks);