# Accéder au contenu PHPCR de SULU #

## Le shell : PHPCRSH ##

```
php bin/console doctrine:phpcr:shell
```

cmd PHPCRSH :  
http://phpcr.readthedocs.io/en/latest/phpcr-shell/interacting.html#listing-node-contents

### Exemple de commande : ###
- list      : list all of the commands type list.
- aliases   : list all of the registered command aliases
- ls        : list current node
- cd cmf/   : change path
- node:edit i18n:en-slides  : edit node

You can set the $EDITOR variable for the current session with this command:

```
export EDITOR="/usr/bin/nano"
```

Check that variable is defined:

```
echo $EDITOR
/usr/bin/nano
```

Ne pas oublier de sauvegarder après modification :

```
session:save
```
Vous pouvez également reset les modifications :

```
session:refresh
```

### Exemple concret : ###

```
SELECT i18n:en-slides FROM nt:base AS n WHERE i18n:en-slides IS NOT NULL;
UPDATE nt:base SET i18n:en-slides=NULL WHERE i18n:en-slides IS NOT NULL;
session:save

SELECT i18n:fr-slides FROM nt:base AS n WHERE i18n:fr-slides IS NOT NULL;
UPDATE nt:base SET i18n:fr-slides=NULL WHERE i18n:fr-slides IS NOT NULL;
session:save
```

Des fois on perd la connection avec la BDD si on reste connecté trop longtemps sur le shell, alors "exit" et on relance la commande doctrine:phpcr:shell

Si par exemple vous avez se genre d'erreur :
```
SQLSTATE[HY000]: General error: 2013 Lost connection to MySQL server during query
```

## L'interface WEB ##
Ici vous pouvez installer une interface Web pour PHPCR :
http://phpcr.readthedocs.io/en/latest/book/getting_started.html#browser-to-see-what-is-in-the-repository

## Query depuis une commande SULU ##

```
php bin/console doctrine:phpcr:nodes:update --query "SELECT * FROM [nt:base] AS n WHERE [i18n:en-slides] IS NOT NULL" --apply-closure="$node->getProperty('i18n:en-slides')->remove();";

About to update 1 nodes. Enter "Y" to continue, "N" to cancel or "L" to list.L
Updating node: [0] /cmf/mukhuri-guesthouse/contents.
 > Applying closure: $node->getProperty('i18n:en-slides')->remove();;
Saving session...
Done.
```

## Query avec l'api SULU ##

```
http://mukhuri-guesthouse.com/admin/api/teasers?ids=content;0f6818a7-b1c7-4974-b87a-fc6059f7dd94,content;dfc00b13-c2e0-4c6d-ad5b-f8c8a7c010b2,content;c650936d-e192-44ce-abfd-d747e1ddd389&locale=en

http://mukhuri-guesthouse.com/admin/api/teasers?ids=content;0f6818a7-b1c7-4974-b87a-fc6059f7dd94&locale=en

http://mukhuri.lo/admin/api/teasers?ids=content;9e460637-b1cf-429f-9bc6-88736e3ed27e,content;9b416c73-49d6-44da-94e7-ce1c704e11c2&locale=en
```

## SOLUTION A MON PROBLEME ##

// Problèmes avec les slides (teaser_selection) de la home

1 - Un article ne voulais pas s'afficher dans les slides de la home malgrès selection

-> Aucune idée d'ou viens le problème après enquête! 
-> Résolution : j'ai copié l'article qui ne voulais pas s'afficher et la copie à bien voulu fonctionner avec les slides

2 - Les articles récupérés ne dépendaient pas de la langue sélectionée

-> Mise à jour de SULU : composer update : passage de la version 1.6.13 à la 1.6.15