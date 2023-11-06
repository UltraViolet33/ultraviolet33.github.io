---
layout: "@/templates/BasePost.astro"
title: Les algos et les structures de données
description: Introduction aux algorithmes, aux structures de données et à l'optimisation
pubDate: 2023-11-06T00:00:00Z
imgSrc: "/assets/images/posts/algo-intro.jpg"
imgAlt: "Algo image"
---

# Les structures de données et les algorithmes

Je commence à lire des articles, des livres et à regarder des vidéos sur les structures de données et les algorithmes (DSA), j'ai donc décidé d'écrire quelques articles sur mon blog quand j'apprends quelque chose d'intéressant.

Cela m'aidera à vérifier si j'ai bien compris le sujet, et j'espère que cela vous aidera aussi ou au moins éveillera votre intêret pour le sujet. 

Dans cet article, je vais vous expliquer pourquoi je pense que vous devriez vous aussi en apprendre plus sur les structures de données et les algorithmes, mais avant cela, nous allons répondre à deux questions : qu'est-ce qu'une stucture de données ? et qu'est-ce que qu'un algorithme ?





## Structures de données

Une recherche rapide sur Google nous donne la réponse suivante :

"Une structure de données est un format spécial utilisé pour stocker et organiser des données.  Elle est également utilisée pour le traitement et l'extraction des données".

Voyons un exemple avec les tableaux :

Si vous avez déjà écrit du code, vous savez probablement déjà ce qu'est un tableau. Un tableau vous permet de stocker et d'extraire des données présentes dans le tableau.
Avec un tableau, vous pouvez ajouter, supprimer ou récupérer un élément.


Voyons un exemple avec du code (PHP):


```php

$my_array = [1, 2, 3, 4, 5, 6, 7, 8];

$my_array[] = 9; // add 9 to the array

echo $my_array[0]; // output 1

```

Nous savons donc ce qu'est un tableau et comment l'utiliser. 

Un tableau est une structure de données, mais ce n'est pas la seule. En fait, il en existe d'autres, beaucoup d'autres.

Pour n'en citer que quelques-unes, certaines structures de données bien connues sont les listes chaînées, les arbres, les graphes ou les matrices.

Je n'entrerai pas dans les détails de ces structures de données, je les présenterai sûrement dans une prochaine fois, mais si vous êtes un développeur et que vous ne savez pas ce qu'est une liste chaînée, je vous recommande de chercher et d'apprendre ce que c'est.

Mais pour l'instant, vous devez savoir qu'il existe différentes structures de données, chacune avec ses avantages et ses inconvénients. Parfois, vous voudrez utiliser des tableaux, d'autres fois, vous voudrez utiliser une autre structure de données.
Tout dépend de ce que vous voulez faire de vos données. C'est tout l'objet de l'étude des structures de données.

## Les algos


Une fois de plus, une recherche rapide sur Google nous donne ce résultat : "un processus ou un ensemble de règles à suivre dans les calculs ou autres opérations de résolution de problèmes, en particulier par un ordinateur".

Une définition assez simple. Voyons un exemple avec du vrai code. Pour cet exemple, nous allons simplement écrire du code pour obtenir la somme d'un tableau de nombres ;

```php

$my_array = [//some numbers];

$sum = 0;

foreach($my_array as $value)
{
    $sum += $value;
}

echo $sum; // output the sum of all numbers in $my_array

```

Vous savez certainement qu'il n'y a pas qu'une seule solution à un problème, mais un nombre infini de solutions.
Mais certaines solutions sont meilleures que d'autres.

C'est ce qu'on appelle l'optimisation.

Voyons un exemple concret ou nous essayons d'optimiser un algo.

## L'algo à optimiser


Imaginez que vous êtes en train de coder, de coder n'importe quoi. Dans votre programme, vous avez un tableau de 1000 nombres, déjà triés par ordre croissant (ce détail est très important pour la suite). Vous cherchez l'index d'un nombre spécifique, s'il existe dans le tableau.


Comment faire ? 

Vous pouvez simplement boucler chaque nombre du tableau et tester s'il s'agit du nombre que vous recherchez.

Voici le code :

```php
function find_index_num($num, $arr)
{
    if (empty($arr)) {
        echo "empty array \n";
        return;
    }

    foreach($arr as $index => $number)
    {
        if($number === $num)
        {
            printf("index of %d is %d", $num, $index);
            return;
        }
    }

    printf("Number %d is not present in the array", $num);
}
```

Cette solution fonctionne bien. Mais ne pensez-vous pas que vous pourriez écrire une meilleure solution ? Réfléchissez un instant, quel est le principal problème dans ce code ?

Il semble que nous testions chaque numéro du tableau. Si le nombre que nous recherchons est le dernier du tableau (ce n'est peut-être pas le cas, mais c'est possible, nous ne le savons pas), nous devrions tester tester tous les éléments du tableau avant de trouver notre nombre.

N'est-ce pas une perte de temps ?

Imaginez que vous ayez 100 000 nombres dans votre tableau, et que vous cherchiez un seul nombre.

Cela signifie que dans le pire des cas (lorsque votre nombre est le dernier), vous devrez parcourir les 100 000 nombres avant d'obtenir votre réponse.

C'est là que vous devez trouver une meilleure solution.

### Essayons de trouver une solution

Si vous avez appris à coder, vous avez peut-être créé un jeu de où il faut deviner un nombre. C'est l'un des premiers programmes que j'ai écrit lorsque j'apprenais à coder. Il s'agit d'un jeu où l'ordinateur choisit un nombre aléatoire, par exemple entre 0 et 100, et où vous devez deviner ce nombre.

Lorsque vous proposez un nombre, l'ordinateur vous répond par "c'est plus" ou  "c'est moins".

Nous pouvons simuler le jeu : 

Nous pourrions essayer tous les nomnbres, un par un en partant de 0, mais il n'est pas dur de trouver une meilleure stratégie.

Essayons le nombre 50.

L'ordinateur dit que c'est plus. Vous savez que le nombre est supérieur à 50 et vous éliminez donc la moitié du total des nombres (tous ceux < 51).

Conservons cette stratégie et essayons le nombre 75.

C'est plus !

Le nombre est donc compris entre 75 et 100. Disons 87. 

C'est moins !

Ok donc entre 75 et 86.

Essayons 80.

C'est moins.

Alors essayons 77.

C'est lui !

Nous avons trouvé le nombre en 5 essais. A chaque essai, nous avons éliminé la moitié des possibilités.

Utlisons cette solution pour notre fonction `find_index_num` de tout à l'heure. 

```php
$arr = [1, 2, 10];

function find_index_num($num, $arr)
{
    if (empty($arr)) {
        echo "empty array \n";
        return;
    }

    $start = 0;
    $end = count($arr) - 1;

    do {
        $index_guess = round(($end + $start) / 2, 0);
        $guess = $arr[$index_guess];

        // c'est lui !
        if ($guess === $num) {
            printf("index of %d is %d", $num, $index_guess);
            return;
            // c'est plus !
        } elseif ($guess < $num) {
            $start = $index_guess + 1;
            // c'est moins !
        } else {
            $end = $index_guess - 1;
        }
    } while ($start <= $end);

    printf("Number %d is not present in the array", $num);
}


find_index_num(11, []);
```

Avec cette approche, nous ne testons pas tous les nombres, il s'agit donc d'un bien meilleur code.

Notez bien que pour que cette solution fonctionne, il faut que les nombres soient ordonnés, ici en ordre croissant.

Imaginez que vous travailliez sur une application contenant un très grand nombre de données, vous ne pouvez tout simplement pas écrire un code dans lequel vous testez une condition pour chaque donnée.

C'est pourquoi il est important d'en savoir plus sur les algos, les structures de données et l'optimisation en générale.

Je continuerai à publier des articles sur mon blog sur ce sujet au cours des prochaines semaines. Le prochain sera certainement sur la notation Big O pour mesurer la complexité d'un algo.

Merci de m'avoir lu jusqu'au bout et continuez à coder !