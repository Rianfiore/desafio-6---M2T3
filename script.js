const person = {
  name: "Rian",
  surname: "Fiore",
  age: 22,
  gender: "m",
  dayOfBirth: 24,
  monthOfBirth: 11,
  yearOfBirth: 1999,
};

//Mostrando o obj

console.log(`Este sou eu:`, person);

//Adicionando

person.favoriteGenreMusic = "Rock";

//Removendo

delete person.gender;

//Mostrando todas as props do obj

Object.keys(person).map((e) => {
  console.log(e);
});

const cadastro = [
  {
    nome: "Felipe",
    gender: "m",
    idade: 22,
    telefone: "+5521985098371",
    amigos: ["Rogério", "Cláudia", "Amanda", "Jorge"],
  },
  {
    nome: "Bruna",
    gender: "f",
    idade: 19,
    telefone: "+5521999874928",
    amigos: ["Luiza", "Matheus", "Layza", "Larissa"],
  },
  {
    nome: "Raquel",
    genre: "f",
    idade: 25,
    telefone: "+552197685948",
    amigos: ["Marcos", "Marina", "Moisés", "Letícia"],
  },
  {
    nome: "Franklin",
    gender: "m",
    idade: 30,
    telefone: "+5521989875948",
    amigos: ["George", "Michael", "Bruno", "Ryan"],
  },
  {
    nome: "Renan",
    gender: "m",
    idade: 24,
    telefone: +552198694738,
    amigos: ["Luan", "Cícero", "Aline", "Cláudio"],
  },
];

const showFriends = (ar) => {
  let varGender;
  let varGenderPronum;
  let varGenderArticle;
  let varGenderReference;
  let plural, plural2;
  return ar.map((e) => {
    varGender = e.gender;
    varGender === "m"
      ? ((varGenderPronum = "ele"),
        (varGenderArticle = "o"),
        (varGenderReference = "e"))
      : ((varGenderPronum = "ela"),
        (varGenderArticle = varGenderReference = "a"));

    e.amigos.length > 1
      ? ((plural = "ê"), (plural2 = "s"))
      : ((plural = "e"), (plural2 = ""));

    return `Ess${varGenderReference} é ${varGenderArticle} ${
      e.nome
    }, ${varGenderPronum} t${plural}m ${
      e.amigos.length
    } amigo${plural2}. São eles: ${e.amigos.join(", ")}`;
  });
};
showFriends(cadastro).map((e) => console.log(e));
