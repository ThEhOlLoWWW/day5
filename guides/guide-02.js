/**
 * Jour 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

const mot = "javascript";
const phrase = "J'apprends le JavaScript à YouCode";

const resultat = phrase.toLocaleLowerCase().includes(mot.toLocaleLowerCase());

console.log(resultat);

