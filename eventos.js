"use strict";

let dataEvento = new Date(2020, 11, 1);
let dataNascimento = new Date(1994, 7, 18);
let curData = new Date();
let usuario = "Yuri";
let idade = Number(curData - dataNascimento) / (1000 * 60 * 60 * 24 * 365);

let partiEventoFuturo = ["João", "Pedro", "Jéssica", "Francisco"];
let palesEventoFuturo = ["Cléber Machado", "Pelé", "Mário", "Marta"];

if (dataEvento > curData) {
  console.log("Evento Permitido!");
} else {
  console.log("Cadastro de Evento não permitido (Data Inválida)");
}

if (idade > 18) {
  console.log(`
Prossiga com o cadastro do participante!`);
  console.log(
    `
Lista de Participantes: ${partiEventoFuturo}, 
Lista de Palestrantes: ${palesEventoFuturo}
`
  );
  if (partiEventoFuturo.length < 100) {
    partiEventoFuturo.push(usuario);
    console.log("Cadastro do participante realizado");
    console.log(`Lista de Participantes atualizada: ${partiEventoFuturo}`);
  } else {
    console.log(
      `Cadastro não permitido (Limite de participantes já atingido!)`
    );
  }
} else {
  console.log(`
Cadastro de participante não permitido (Menor de 18 anos)`);
}
