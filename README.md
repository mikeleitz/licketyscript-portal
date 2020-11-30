# licketyscript-portal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Deploy to google cloud

```
docker pull leadtechnologist.registry.jetbrains.space/p/lsc/leadtechnologist-containers/licketyscript-portal:0.3

docker tag leadtechnologist.registry.jetbrains.space/p/lsc/leadtechnologist-containers/licketyscript-portal:0.3 gcr.io/lickety-script/licketyscript-portal:0.3

docker push gcr.io/lickety-script/licketyscript-portal:0.3
```
