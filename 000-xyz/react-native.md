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
```

```sh
$ cd ./design_pattern_app/ios && pod install

Analyzing dependencies
Fetching podspec for `DoubleConversion` from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`
Fetching podspec for `Folly` from `../node_modules/react-native/third-party-podspecs/Folly.podspec`
Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`
Downloading dependencies
Installing CocoaAsyncSocket (7.6.4)
Installing CocoaLibEvent (1.0.0)
Installing DoubleConversion (1.1.6)

[!] Error installing DoubleConversion
[!] /usr/bin/git clone https://github.com/google/double-conversion.git /var/folders/qm/csrtpvpn62x82v4zykvsrnw80000gn/T/d20201026-75610-10ywk82 --template= --single-branch --depth 1 --branch v1.1.6

Cloning into '/var/folders/qm/csrtpvpn62x82v4zykvsrnw80000gn/T/d20201026-75610-10ywk82'...
error: RPC failed; curl 56 LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 54
fatal: the remote end hung up unexpectedly
```
