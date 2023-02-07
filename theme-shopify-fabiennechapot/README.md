# Thème Shopify

## Installation du repo 
Ajouter les clés dans github secret, crée dans l'interface shopify private app avec les en lecture et ecriture du thème

```
THEME_APP_KEY shppa_xxxx
THEME_APP_URL xxxx.myshopify.com
THEME_APP_ID 00000000
THEME_APP_ID_DEV 111111111
NPM_TOKEN xxxx
````

## Lancer le thème

### Configurer
- Installer [Theme Kit](https://shopify.dev/themes/tools/theme-kit/getting-started) sur votre pc
- Créer un fichier config.yml à la racine du projet
- Copier-coller ce contenu :
```
votre_prenom:
  theme_id: "xxx"
  password: shppa_xxx
  store: xxxx.myshopify.com
  ignore_files:
    - config/settings_data.json
```

- **theme_id** : Dans l'admin Shopify, allez dans la liste des thèmes. Une fois le vôtre créé, cliquez sur *Action* puis *Modifier le code*. Vous verrez alors dans l'url l'id du thème
- **password** : Dans l'admin Shopify, allez dans *Applications* puis *Paramètres ...*. Si vous ne voyez pas d'application *Theme Kit*, alors créez en une en cochant les autorisations pour modifier les thèmes. Ensuite, vous n'aurez plus qu'à faire un copier coller du mot de passe.
- **store** : Url de la boutique dans l'admin shopify

### Développement
- Lancez à la racine du projet : `theme watch --env=NOM_DU_THEME`
- Dans le dossier src, lancez : `yarn install` puis `yarn watch`

### Déploiement
Le déploiement est utile quand on a oublié le lancer le watch lorsqu'on codait, ou lorsqu'on récupère des modifications depuis Git.
- Dans le dossier src, lancez : `yarn install` puis `yarn build`
- Lancez à la racine du projet : `theme deploy --env=NOM_DU_THEME`


<br><br>

## Espace compte
Pour installer ou mettre à jour le package npm **@faume-tech/account**, voir la doc :
[npmjs.com/package/@faume-tech/account](https://www.npmjs.com/package/@faume-tech/account)