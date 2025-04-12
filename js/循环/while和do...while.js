var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];

// var i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     info += "and " + cats[i] + ".";
//   } else {
//     info += cats[i] + ", ";
//   }

//   i++;
// }

var i = 0;

do {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
} while (i < cats.length);
