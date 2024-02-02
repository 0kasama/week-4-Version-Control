function nilaiRandom(jumlah) {
    let nilaiRandom = Array.from({ length: jumlah }, () => Math.floor(Math.random() * 50) + 1);
    let arrayGenap = [];
    let arrayGanjil = [];
  
    for (let i = 0; i < nilaiRandom.length; i++) {
      let nilai = nilaiRandom[i];
      if (arrayGenap.length < 50 && nilai % 2 === 0) {
        arrayGenap.push(nilai);
      } else {
        arrayGanjil.length < 50 && arrayGanjil.push(nilai);
      }
    }
  
    return { arrayGenap, arrayGanjil };
  }
  
  let { arrayGenap, arrayGanjil } = nilaiRandom(100);
  console.log('Array pada Index Genap:', arrayGenap);
  console.log('Panjang Array pada Index Genap:', arrayGenap.length);
  console.log('Array pada Index Ganjil:', arrayGanjil);
  console.log('Panjang Array pada Index Ganjil:', arrayGanjil.length);
  
    //<==========> Min, Max, Average, dan Total Ganjil <==========>
    
    let minGanjil = arrayGanjil[0];
    let maxGanjil = arrayGanjil[0];
    let totalGanjil = 0;
    
    for (let i = 0; i < arrayGanjil.length; i++) {
      if (arrayGanjil[i] < minGanjil) {
        minGanjil = arrayGanjil[i];
      }
      if (arrayGanjil[i] > maxGanjil) {
        maxGanjil = arrayGanjil[i];
      }
      totalGanjil += arrayGanjil[i];
    }
    
    let averageGanjil = Math.round(totalGanjil / arrayGanjil.length);
    
    console.log("====================")
    console.log("Minimum Array Ganjil: " + minGanjil);
    console.log("Maximum Array Ganjil: " + maxGanjil);
    console.log("Average Array Ganjil: " + averageGanjil);
    console.log("Total Array Ganjil: " + totalGanjil);
    
    //<==========> Min, Max, Average, dan Total Genap <==========>
    
    let minGenap = arrayGenap[0];
    let maxGenap = arrayGenap[0];
    let totalGenap = 0;
    
    for (let i = 0; i < arrayGenap.length; i++) {
      if (arrayGenap[i] < minGenap) {
        minGenap = arrayGenap[i];
      }
      if (arrayGenap[i] > maxGenap) {
        maxGenap = arrayGenap[i];
      }
      totalGenap += arrayGenap[i];
    }
    
    let averageGenap = Math.round(totalGenap / arrayGenap.length);
    
    console.log("====================")
    console.log("Minimum Array Genap: " + minGenap);
    console.log("Maximum Array Genap: " + maxGenap);
    console.log("Average Array Genap: " + averageGenap);
    console.log("Total Array Genap: " + totalGenap);
    
    //<==========> Perbandingan Min, Max, Average, dan Total <==========>
    
    console.log("====================")
    if (minGanjil < minGenap){
      console.log("Nilai min genap lebih besar dari min ganjil")
    }
      else {
        console.log("Nilai min ganjil lebih besar dari min genap")
      }
    
    if (maxGanjil < maxGenap){
      console.log("Nilai max genap lebih besar dari max ganjil")
    }
      else {
        console.log("Nilai max ganjil lebih besar dari max genap")
      }
    
    if (averageGanjil < averageGenap){
      console.log("Nilai average genap lebih besar dari average ganjil")
    }
      else {
        console.log("Nilai average ganjil lebih besar dari average genap")
      }
    
    if (totalGanjil < totalGenap){
      console.log("Nilai total genap lebih besar dari total ganjil")
    }
      else {
        console.log("Nilai total ganjil lebih besar dari total genap")
      }