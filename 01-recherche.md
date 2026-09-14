# 🔎 Jour 05 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questionse


### Question 01

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

c'est immuable, le methode .toUpperCase cree un nouvel copie en UpperCase dans un autre memorie.


---

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

slice ne prend pas de valeur negatives, .substring PREND des valeurs negative, substr() est le moins recommandé.

---

### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

le methode: .split() avec un separareur ","
ex: tab = string.split(",")

---

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

indexOf() Recherche une chaîne de caractères littérale, est accepte un 2eme arguments.n'accepte pas les expressions Regex
.search() il convertir une chaine simple aux Regex, n'accepte pas un 2eme argument. 
---

### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

template literals offer plusieurs fonctionnalités puissantes par rapport aux `'`, ou `"` comme utilisasion d'un variable dans un chine de caractéres.
---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

usilisasion de startWith() methode.

---

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

utilisasion de .trim() methode.

---

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

`.replace("a", "b")` replace uniquement le premier occurence d'un element rechercher, `.replaceAll("a", "b")` replace TOUT les occurence recherchée ,

---

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**  

Une expression régulière (Regex) est une séquence de caractères qui forme un motif de recherche, utilisée pour analyser, valider ou manipuler du texte.

---

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

.lenght = 0;


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
