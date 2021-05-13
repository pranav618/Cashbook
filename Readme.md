## Cashbook App

- This app is implemented on Responsive Scaling, so it will support all type of mobile screens.
- Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Pre-requisite](#pre-requisite)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Making Release App](#managing-releases)

## Pre-requisite

- This is a React-Native app.
- npm version used 6.9.0
- node version used v10.16.3
- Android Studio

## Installation

Do `npm install` in the root directory

# Running the app

To run the app locally following steps needs to be followed:

#### Running on Android

- Go to Android Studio where you need to install an emulator(recommended `API Level 29`)
- After running the emulator,

###### To run the debug build on device run the following command:

`react-native run-android`

# Managing Releases

- To make the release app, do `cd android && ./gradlew assembleRelease`
- Your apk will be created in `android/app/build/outputs/apk/release/`
- Just install the app-release.apk in your android mobile, then you will be able to run the app
- I have already made an apk and recorded the whole app flow and uploaded in my drive, please refer this link to get the apk and recording
  https://drive.google.com/drive/folders/1nJZz5JTPSPMLXN7V8zYcwQDVJjpN092v?usp=sharing
