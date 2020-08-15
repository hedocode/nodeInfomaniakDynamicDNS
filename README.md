# Usage

Ce programme [Node.js](https://nodejs.dev/) permet à une machine UNIX (Linux / Mac) située sur une box ayant une adresse IP changeante, de mettre à jour son adresse dès qu'elle change à l'aide d'un nom de domaine (example.com) [Infomaniak](https://www.infomaniak.com/fr), de [leur système de DynamicDNS](https://www.infomaniak.com/fr/support/faq/2357/dyndns-creer-un-ddns-avec-un-domaine-gere-chez-infomaniak) et [l'API liée](https://www.infomaniak.com/fr/support/faq/2376/dyndns-mettre-a-jour-un-dns-dynamique-via-lapi).

# Installation

Pour réaliser cette installation vous devez avec un terminal ouvert à la racine du projet que vous aurez au préalable cloner


1. Renseignez votre nom de domaine, login et mot de passe dans le fichier [credentials.json](/credentials.json).
2. Installation : Lancez [le script d'installation](/install.sh) avec  `bash ./install.sh`
3. Lancez la commande `screen bash`
4. Compilez avec `yarn` ou `npm install`
5. Exécutez avec `yarn start` ou `npm run start`
6. Décommentez la ligne `credentials.json` du fichier `.gitignore` pour ne pas versionner vos mots de passe
7. Quittez le screen en faisant `Ctrl + A` puis en appuyant sur la touche `D`



Après ces étapes, votre machine met désormais automatiquement son adresse à jour sur Infomaniak 



## Notes : 

- Vous pouvez voir la liste des screen avec `screen -list`  et revenir à un screen avec `screen -r [nom du screen]`