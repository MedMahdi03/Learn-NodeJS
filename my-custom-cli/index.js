#!/usr/bin/env node

// const yargs = require("yargs");
// const {argv} = yargs(process.argv);
const inquirer = require("inquirer")
const showSixMoves = async (pokemonName) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await res.json();
    const moves = pokemon.moves.map((({move}) => move.name));
    console.log(moves.slice(0,7));
}
const prompt = inquirer.createPromptModule();
prompt([{
    type: "input",
    name:"pokemon",
    message: "Enter a pokemon name to view its first 6 moves"
}]).then((answers)=> {
    const pokemon = answers.pokemon;
    showSixMoves(pokemon);
})

