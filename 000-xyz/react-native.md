# React Native

```sh
$ npx react-native init design_pattern_app

```

```sh
$ npm uninstall -g react-native-cli

$ npx react-native init App

# $ npx react-native init App --version X.XX.X
$ npx react-native init App --version 0.63.0

$ npx react-native init TSApp --template react-native-template-typescript
```

## dev

```sh
$ npx react-native start

$ npx react-native run-ios

$ npx react-native run-android

```

## old dev

```sh
$ cd App
$ yarn ios
# 或者
$ yarn react-native run-ios

$ yarn android
# 或者
$ yarn react-native run-android
```

## RN App

```sh
$ npx react-native init RNApp

Welcome to React Native!
Learn once, write anywhere

✔ Downloading template
✔ Copying template
✔ Processing template
⠇ Installing CocoaPods dependencies (this may take a few minutes)
```

## CocoaPods bug

```sh
✔ Downloading template
✔ Copying template
✔ Processing template
✖ Installing CocoaPods dependencies (this may take a few minutes)
✖ Installing CocoaPods dependencies (this may take a few minutes)
error Error: Failed to install CocoaPods dependencies for iOS project, which is required by this template.
Please try again manually: "cd ./design_pattern_app/ios && pod install".
CocoaPods documentation: https://cocoapods.org/

$ cd ./design_pattern_app/ios && pod install
```
