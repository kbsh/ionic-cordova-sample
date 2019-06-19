# What that

ionic+cordova+firebaseを使った何かサンプル

# Start Up

1. pull this repository

```
git clone https://github.com/kbsh/ionic-cordova-sample.git
```

2. build and start the docker image

```
cd app
docker-compose up --build -d
```

# Usage

- view development page

```
cd app
docker exec -it ionic_container ionic serve
open http://localhost:8100
```

- debug build for iOS ( only MacOS )

create xcodeproj and open it with Xcode

```
cd app
docker exec -it ionic_container ionic cordova build ios --debug --source-map
open platforms/ios/MyApp.xcodeproj
```
