# What that

ionic4 + cordova + firebaseを使った何かサンプル

<img src="https://user-images.githubusercontent.com/11205591/61349816-65f06d80-a8a0-11e9-8263-2f258b0228c5.gif" width="300">

### Use Library

name|purpose
---|---
[RxJS](https://rxjs-dev.firebaseapp.com/)|Reactive, State management.

# Need

- Docker
- Android Studio
  - create Virtual Device with ADV Manager
- Java8
- Gradle
- Xcode ( option )

```
# install java8 ( MacOS,Homebrew )
brew tap homebrew/cask-versions
brew cask install adoptopenjdk8
export JAVA_HOME=`/usr/libexec/java_home -v "1.8"`
PATH=${JAVA_HOME}/bin:${PATH}

# install gradle ( MacOS,Homebrew )
brew install gradle

# Android Studio setting
echo export ANDROID_SDK_ROOT=\${HOME}/Library/Android/sdk >> ~/.bash_profile
echo export PATH=\${PATH}:\${ANDROID_SDK_ROOT}/tools/bin >> ~/.bash_profile
echo export PATH=\${PATH}:\${ANDROID_SDK_ROOT}/platform-tools >> ~/.bash_profile
echo export PATH=\${PATH}:\${ANDROID_SDK_ROOT}/emulator >> ~/.bash_profile
```

# Start Up

1. Pull this repository

```
git clone https://github.com/kbsh/ionic-cordova-sample.git
```

2. Build and start the docker image

```
cd app
docker-compose up --build -d
```

# Usage

- View development page

```
cd app
docker exec -it ionic_container ionic serve
open http://localhost:8100
```

- Debug build for iOS ( only MacOS )

1. Create xcodeproj and open it with Xcode ( below command )
2. In Xcode, set acive scheme. Change iOS simulator to iPhone {xx}
2. In Xcode, RUN!

```
cd app
docker exec -it ionic_container ionic cordova build ios --debug --source-map
open platforms/ios/MyApp.xcodeproj
```

- Debug build for Android

```
cd app
ionic cordova run android
```

If error.

```
# You need exec permission, if occur this error.
  /Users/xxxxxxx/dev/github.com/kbsh/ionic-cordova-sample/app/platforms/android/gradlew: Command failed with exit code EACCES
# Do it.
chmod +x /Users/xxxxxxx/dev/github.com/kbsh/ionic-cordova-sample/app/platforms/android/gradlew
```
