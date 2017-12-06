/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"
DNAStrand ("GTAT") # return "CATA"
*/

function DNAStrand(dna){
  	var output = "";
    // Обходим в цикле входящую строку и при необходимости заменяем символы, в соответствии с заданием
    for (var i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case "A":
          output += "T";
          break;
        case "T":
          output += "A";
          break;
        case "G":
          output += "C";
          break;
        case "C":
          output += "G";
          break;
        default:
		// По умолчанию добавляется текущий элемент массива
          output += dna[i];
      }
    }
    return output;
}

console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"
console.log(DNAStrand("ATMCBVGTTCA")); // "TAMGBVCAAGT"