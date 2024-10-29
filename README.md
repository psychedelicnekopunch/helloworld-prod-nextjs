
## 環境

* AmazonLinux2023
* Nginx 1.24.0
* Node 22.9.0


## ローカル

```bash
#$ npm run dev
$ docker-compose up
```

~http://localhost:3000 にアクセス~
http://localhost:8080 にアクセス



## サーバー

### build

```bash
$ cd /path/to/helloworld-prod-go/app
$ npm install
$ npm run build
```

### watch

```bash
$ cd /path/to/helloworld-prod-go/app
$ npm run dev
```


### プロダクト起動

* npm コマンドは package.json 参照
* pm2 の設定ファイルは ecosystem.config.js

```bash
$ npm install -g pm2
$ cd /path/to/helloworld-prod-go/app
# pm2 start npm --name helloworld-prod-js -- start
#$ npm run pm2-start

# Production
# pm2 start ecosystem.config.js --env production
$ npm run pm2-production-start

# Staging
# pm2 start ecosystem.config.js --env staging
$ npm run pm2-staging-start
```


#### プロダクト再起動

```bash
$ cd /path/to/helloworld-prod-go/app

# Production
# pm2 reload helloworld-prod-js
$ npm run pm2-production-reload

# Staging
# pm2 reload helloworld-prod-js-staging
$ npm run pm2-staging-reload
```


#### プロダクト停止

```bash
$ cd /path/to/helloworld-prod-go/app

# Production
# pm2 stop helloworld-prod-js
$ npm run pm2-production-stop

# Staging
# pm2 stop helloworld-prod-js-staging
$ npm run pm2-staging-stop
```


#### プロダクト削除

```bash
$ cd /path/to/helloworld-prod-go/app

# Production
# pm2 delete helloworld-prod-js
$ npm run pm2-production-delete

# Staging
# pm2 delete helloworld-prod-js-staging
$ npm run pm2-staging-delete

# 全削除
$ pm2 kill
```

