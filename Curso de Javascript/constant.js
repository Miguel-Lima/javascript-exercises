// Dicas : Use o Let somente quando for alterar valores, mas de preferência ao Const
 let valorIngressoAdulto = 20;
 valorIngressoAdulto = 30;
 console.log(valorIngressoAdulto);
 // resultado = 30

 const valorIngressoCrianca = 10;
 valorIngressoCrianca = 15;
 console.log(valorIngressoCrianca);
 // resultado = Error = 15

 const valorIngressoCrianca = 10;
 
 console.log(valorIngressoCrianca * 2);
 // resultado = 20, pois foi * 2
