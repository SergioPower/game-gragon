let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


/**
 *  JavaScript interactúa con el HTML utilizando
 *  el Modelo de Objetos del Documento, o DOM.
 *  El DOM es un árbol de objetos que representa el HTML. 
 *  Puedes acceder al HTML usando el objeto 'document', 
 *  que representa todo tu documento HTML.
 */


/**
 *  Un método para encontrar elementos específicos en tu HTML
 *  es usar el método querySelector(). El método querySelector() 
 *  toma un selector CSS como argumento y devuelve el primer elemento
 *  que coincida con ese selector.
 */
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const locations = [];

52