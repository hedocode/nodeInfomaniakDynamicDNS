# Usage

Ce programme [Node.js](https://nodejs.dev/) permet à une machine située sur une box ayant une adresse IP changeante, de mettre à jour son adresse dès qu'elle change à l'aide d'un nom de domaine (example.com) [Infomaniak](https://www.infomaniak.com/fr), de [leur système de DynamicDNS](https://www.infomaniak.com/fr/support/faq/2357/dyndns-creer-un-ddns-avec-un-domaine-gere-chez-infomaniak) et [l'API liée](https://www.infomaniak.com/fr/support/faq/2376/dyndns-mettre-a-jour-un-dns-dynamique-via-lapi).

# Installation


1. Renseignez votre nom de domaine, login et mot de passe dans le fichier [credentials.json](/credentials.json).

- Unix (Mac / Linux)
  2. Lancez [le script d'installation](/installOnRaspberry_ARMv7.sh) avec `bash ./installOnRaspberry_ARMv7.sh`
- Posix (Windows)
  2. Installez [node / npm](https://www.npmjs.com/get-npm) et [yarn](https://yarnpkg.com/getting-started/install) 

3. Compilez avec `yarn` ou `npm install`

4. Exécutez avec `yarn start` ou `npm run start`

5. Décommentez la ligne `credentials.json` du fichier `.gitignore` pour ne pas versionner vos mots de passe