Pour récupérer les données du format JSON, il faut run un serveur localement sur votre machine.

Pour cela, il faut suivre les étapes suivantes: 

1. Si vous avez deja nodeJS, il faut suivre ces etapes
* Installation du package necessaire pour exécuter le serveur en faisant `npm install -g json-server`
* Lancement du serveur localement dans le repertoire où est situé le fichier json en faisant `json-server --watch output.json`
* Si necessaire, lorsque l'URL donnée par le serveur ne correspond pas avec celle dans le fetch du fichier candidat.js, il faut remplacer la nouvelle URL donnée lors du lancement du serveur, par celle qui se situe dans le fetch.  

2. Sinon il faut prealablement installer NodeJS. Vous pouvez tester l'installation avec `npm -v` . Elle doit vous donner la version installee. Ensuite, il faut suivre les etapes precedentes.