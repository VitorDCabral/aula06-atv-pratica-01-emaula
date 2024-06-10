function contarVogais(str) {
    str = str.toLowerCase();
  
   const vogais= "aeiou";
  
   let contagem = 0;
  
   for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contagem++;
    }
  }
  return contagem;
  
  }
  const palavra = "Beterraba";
  console.log(`o número de voagis em ${palavra} é: ${contarVogais(palavra)} `)