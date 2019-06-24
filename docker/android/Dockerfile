FROM ubuntu:16.04

# Install sudo
RUN \
  apt update \
  && apt -y install sudo \
  && useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

# Install 32bit lib
RUN sudo apt -y install lib32stdc++6 lib32z1

# Install Java8
RUN \
  apt install -y software-properties-common curl \
  && add-apt-repository -y ppa:openjdk-r/ppa \
  && apt update \
  && apt install -y openjdk-8-jdk

# Download Android SDK
RUN \
  sudo apt install -y wget \
  && cd /usr/local \
  && wget http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz \
  && tar zxvf android-sdk_r24.4.1-linux.tgz \
  && rm -rf /usr/local/android-sdk_r24.4.1-linux.tgz

# Environment variables
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64
ENV ANDROID_HOME /usr/local/android-sdk-linux
ENV PATH $ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH

# Update of Android SDK
RUN \
  echo y | android update sdk --no-ui --all --filter "android-23,build-tools-23.0.3" \
  && echo y | android update sdk --no-ui --all --filter "extra-google-m2repository,extra-android-m2repository"

# Install Gradle
RUN \
  add-apt-repository -y ppa:cwchien/gradle \
  && apt update \
  && apt install -y gradle

WORKDIR /data
