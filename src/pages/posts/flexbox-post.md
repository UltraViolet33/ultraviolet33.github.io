---
layout: "@/templates/BasePost.astro"
title: Flexbox Exercices !
description: Des exercices pour pratiquer Flexbox en CSS
pubDate: 2023-09-23T00:00:00Z
imgSrc:  "/assets/images/posts/flexbox/exo1.png"
imgAlt: "Game of life image"
---

# Exercises Flexbox

Pour pratiquer CSS Flexbox, voici quelques exercices :

Pour chaque exercice, le code de départ HTML et CSS est donné ainsi qu'une image du résultat attendu.

## - 1 damier de 4 cases sur 2

Code HTML 

```html
<div class="container">
    <div class="black"></div>
    <div></div>
    <div class="black"></div>
    <div></div>
    <div></div>
    <div class="black"></div>
    <div></div>
    <div class="black"></div>
</div>
```

Code CSS

```css
*{
  box-sizing: border-box;
  margin: 0;
  padding:0;
}

.black{
  background-color: black;
}
```


Résultat attendu

<img src="/assets/images/posts/flexbox/exo1.png" width="600px">


- le damier doit prendre toute la hauteur de l'écran
- le damier doit être de 4 cases de longueur sur 2 de largeur


### Solution 

```css
.container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.container>div {
  width: 25%;
}
```

On donne au container une hauteur de 100 vh pour qu'il occupe toute la hauteur de l'écran.
Puis on active flex avec `display: flex` et le retour à la ligne avec `flex-wrap: wrap`.

Pour que chaque div occupe un quart de l'espace horizontalement, on leur donne `width: 25%` .