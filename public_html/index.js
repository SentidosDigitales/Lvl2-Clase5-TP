/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var peliculas = new Array();

function addPelicula(pelicula) {
    for (var i = 0; i < peliculas.length; i++) {
        if (pelicula.titulo == peliculas[i].titulo) {
            console.log("Pelicula ya ingresada");
            return "repetida";
        }
    }
    peliculas.push(pelicula);
}

function orderPeliculas() {
    peliculas.sort();
}

function deleteByID(id) {
    for (var i = 0; i < peliculas.length; i++) {
        if (peliculas[i].ID == id) {
            peliculas.splice(i, i + 1);
            break;
        }
    }
}
function Pelicula(id, titulo) {
    this.ID = id;
    this.titulo = titulo;
}

var peli1 = new Pelicula("1", "El secreto de sus ojos");
var peli2 = new Pelicula("3", "Día de la independencia");
var peli3 = new Pelicula("2", "JUMAJI");

peliculas = [peli1, peli2, peli3];

function orderById() {
    peliculas.sort(function (a, b) {
        if (a.ID > b.ID) {
            return 1;
        }
        if (a.ID < b.ID) {
            return -1;
        }
        return 0;
    });
}

function orderByTitulo() {
    peliculas.sort(function (a, b) {
        if (a.titulo > b.titulo) {
            return 1;
        }
        if (a.titulo < b.titulo) {
            return -1;
        }
        return 0;
    });
}