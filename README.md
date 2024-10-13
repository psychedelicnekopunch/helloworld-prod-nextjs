
## 環境

* AmazonLinux2023
* Nginx 1.24.0
* Node 22.9.0


## ローカル

```bash
$ npm run dev
```

http://localhost:3000 にアクセス



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

```bash
$ npm install -g pm2
$ cd /path/to/helloworld-prod-go/app
# pm2 start npm --name helloworld-prod-js -- start
$ npm run pm2-start
```


#### プロダクト再起動

```bash
$ cd /path/to/helloworld-prod-go/app
# pm2 reload helloworld-prod-js
$ npm run pm2-reload
```


#### プロダクト停止

```bash
$ cd /path/to/helloworld-prod-go/app
# pm2 stop helloworld-prod-js
$ npm run pm2-stop
```


#### プロダクト削除

```bash
$ cd /path/to/helloworld-prod-go/app
# pm2 delete helloworld-prod-js
$ npm run pm2-delete
# 全削除
$ pm2 kill
```

