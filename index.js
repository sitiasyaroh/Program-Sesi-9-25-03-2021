//EXERCISE PROGRAM SESI 9, 25 MARET 2021 (JAVASCRIPT OBJECT)

//!-- Exercise 1 --!
let Hewan = {
    Nama: 'Kucing',
    Kaki :  4,
    Spesies:'Mamalia', 
    Warna: ['Oren',' Putih',' Hitam'],
    Makanan : ['Ikan', ' Ayam'],
    Suara: 'Miaaaaw'
}
console.log (Hewan);

for (let hewan in Hewan){
    document.write('<li>' + Hewan[hewan])
}

const strengths = {
    animalStrengths: function () {
        return '';
    }
};
console.log(strengths.animalStrengths());

//!-- Exercise 2 --!
const data = 
    {
        name: 'Alpha',
        class: 'Dragon',
        club: ['Bola', ' Bulutangkis']
    }

console.log(`<br> ${data.name} ada di kelas ${data.class} dia mengikuti club ${data.club}`);
document.write(`<br> ${data.name} ada di kelas ${data.class} dia mengikuti club ${data.club}`);

const data1 = 
    {
        name: 'Beta',
        class: 'Lizard',
        club: ['Membaca', ' Bulutangkis']
    }

console.log(`<br> ${data1.name} ada di kelas ${data1.class} dia mengikuti club ${data1.club}`);
document.write(`<br> ${data1.name} ada di kelas ${data1.class} dia mengikuti club ${data1.club}`);

//    !-- Exercise 3 --!

//printAll(), hasil:
//1, "Belajar Coding"
//2, "nanti tidur"
let todos = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos.forEach((todosData)=>{
    console.log(todosData);
})

// printByID(id), hasil:
// 1, "belajar coding"
let todos1 = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos1.forEach((todosData)=>{
    console.log(todosData.id);
})

// add(newTodo), hasil:
// 1, "belajar coding"
// 2, "nanti tidur"
// 3, "ngerjain tugas"
let todos2 = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ];
todos2.push(id= 3, todo= 'ngerjain tugas');
console.log(todos2);

// deleteByID(id), hasil
// 1, "belajar coding"
// 3, "ngerjain tugas"
let todos3 = [
    {
        id: 1, 
        todo: 'belajar coding'
      },
    {
        id: 2, 
        todo: 'nanti tidur'
      }
  ]
  function deleteByID(id){
      delete todos3[id]
      console.log(todos3)
  }
deleteByID(1)

// updateByID(newTodo), hasil
// 1, "belajar CRUD"
// 3, "ngerjain tugas"
let todos4 = [
    {
        id: 1, 
        todo: 'belajar coding'
    },
    {
        id: 2, 
        todo: 'nanti tidur'
    }
    ]
function updateByID(id, newTodo){
    todos4[id] = newTodo
    console.log(todos4)
    }
updateByID(1, 'belajar crud')

//    !-- Exercise 4 --!
const buah = [ 
    {
        nama :"Apple",
        warna :"Red",
        namaLatin :"Malus Sylvestris",
        tipeBiji : "Singel Seed",
        gambarBuah :1
    },
    {
        nama :"Banana",
        warna : "Yellow",
        namaLatin : "Musa Paradisiaca",
        tipeBiji : "Double Seed",
        gambarBuah :2
    },
    {
        nama :"Blueberry",
        warna : "Purple",
        namaLatin : "Vaccinium Carybosum",
        tipeBiji : "Single Seed",
        gambarBuah :3
    },
    {
        nama :"Cherry",
        warna : "Red",
        namaLatin :"Prunus Apetala",
        tipeBiji : "Double Seed",
        gambarBuah :4
    },
    {
        nama :"Lemon",
        warna : "Yellow",
        namaLatin :"Citrus Liman",
        tipeBiji : "Single Seed",
        gambarBuah :5
    },
    {
        nama :"Manggo",
        warna : "Orenge",
        namaLatin :"Citrus Seed",
        tipeLiji : "Double Seed",
        gambarBuah :6
    },
    {
        nama :"Orange",
        warna : "Yellow",
        namaLatin :"Malus Sylvestris",
        tipebiji : "Double Seed",
        gambarBuah : 7
    },
    {
        nama :"Pear",
        warna : "Yellow",
        namaLatin : "Pyrus Caucasia",
        tipeBiji : "Double Seed",
        gambarBuah :8
    }
];
buah.forEach((buahData)=>{
    console.log(buahData);
});