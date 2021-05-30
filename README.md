# Introduction

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/lomirus/counter-trainer/blob/main/LICENSE)

A Mobile App that helps you memorize the numbers of foreign languages easily, especially in speaking and listening. It's still under development and unavailable now. However, you can try the pre-release version now.

# Usage

## Download & Install Dependencies

Suppose you have installed `Node.js` and `Git`:

```bash
git clone https://github.com/lomirus/counter-trainer.git
cd counter-trainer
npm install
react-native link react-native-tts
```

## Run & Test

Make sure that you have set up the development environment by following [this](https://reactnative.dev/docs/environment-setup) before running the commands below:

```bash
npx react-native run-android
```

## Build Release

### For Android

Do as [this](https://www.reactnative.dev/docs/signed-apk-android), and then change directory to `android`:
```bash
cd android
```
Finally, and for most situations, you just need to run:
```bash
./gradlew assembleRelease
```
However, if you are using CMD, run:
```bash
gradlew.bat assembleRelease
```

Then the `.apk` files will be found at `android/app/build/outputs/apk/release`.