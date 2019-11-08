## コンテナを全て削除

```shell
$ docker rm -f $(docker ps -aq)
```

## イメージを全て削除

```shell
$ docker rmi -f $(docker images -q)
```

## ボリュームを全て削除

```shell
$ docker volume rm -rf $(docker volume ls -q)
```

## イメージ名がnoneのイメージを全て削除

```shell
$ docker rmi $(docker images | grep none | awk '{print $3}')
```
