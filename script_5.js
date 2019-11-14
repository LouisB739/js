const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

if (books.map(function(book){return book.rented > 0 }).includes(false)) {console.log("au moins un livre n'a pas été prêté")}
  else {console.log("Tous les livres ont été prêté au moins une fois")}


console.log("Quel est livre le plus emprunté ?")




result = books.filter(book => book.rented == Math.max.apply(Math, books.map(function(book) { return book.rented;})));
console.log(result[0])


console.log("Quel est livre le moins emprunté ?")

result2 = books.filter(book => book.rented == Math.min.apply(Math, books.map(function(book) { return book.rented;})));
console.log(result2[0])




console.log("Trouve le livre avec l'ID: 873495 ")


console.log(books.filter(book => book.id == 873495)[0])

console.log("Supprime le livre avec l'ID: 133712")

books_array = []

books_array.push(books.filter(book => book.id != 133712))

console.log(books_array)

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")

 
function dynamicSort(property) {
    return function (a,b) {
    return a[property].localeCompare(b[property]);
        }        
    };


console.log(books.filter(book => book.id != 133712).sort(dynamicSort("title")));




