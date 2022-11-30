const canGiveBlood = (don, rec) => {
    if (don[don.length - 1] === '+' && rec[rec.length - 1] === "-") return false;
    don.toUpperCase();
    rec.toUpperCase();

    if(don.includes('O')) return true;

    if(don.includes('A') && rec.includes('A') && don.length<=rec.length) return true;

    if(don.includes('B') && rec.includes('B') && don.length<=rec.length) return true;

    return false;


}

console.log(canGiveBlood("O+", "A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));