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

## CocoaPods bug ❌

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


```sh
$ cd ./design_pattern_app/ios && pod install


➜  ios git:(rn-app) ✗ pod install 
Analyzing dependencies
Fetching podspec for `DoubleConversion` from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`
Fetching podspec for `Folly` from `../node_modules/react-native/third-party-podspecs/Folly.podspec`
Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`
Downloading dependencies
Installing CocoaAsyncSocket (7.6.4)
Installing CocoaLibEvent (1.0.0)
Installing DoubleConversion (1.1.6)
Installing FBLazyVector (0.63.3)
Installing FBReactNativeSpec (0.63.3)
Installing Flipper (0.54.0)
Installing Flipper-DoubleConversion (1.1.7)
Installing Flipper-Folly (2.3.0)

[!] Error installing Flipper-Folly
[!] /usr/bin/git clone https://github.com/facebook/folly.git /var/folders/qm/csrtpvpn62x82v4zykvsrnw80000gn/T/d20201028-52328-hfukp8 --template= --single-branch --depth 1 --branch v2020.04.06.00

Cloning into '/var/folders/qm/csrtpvpn62x82v4zykvsrnw80000gn/T/d20201028-52328-hfukp8'...
error: RPC failed; curl 18 transfer closed with outstanding read data remaining
fatal: the remote end hung up unexpectedly
fatal: early EOF
fatal: index-pack failed

```

https://github.com/facebook/folly

## OK

```sh
➜  src git:(rn-app) ✗ npx react-native init design_pattern_app
                                                          
               ######                ######               
             ###     ####        ####     ###             
            ##          ###    ###          ##            
            ##             ####             ##            
            ##             ####             ##            
            ##           ##    ##           ##            
            ##         ###      ###         ##            
             ##  ########################  ##             
          ######    ###            ###    ######          
      ###     ##    ##              ##    ##     ###      
   ###         ## ###      ####      ### ##         ###   
  ##           ####      ########      ####           ##  
 ##             ###     ##########     ###             ## 
  ##           ####      ########      ####           ##  
   ###         ## ###      ####      ### ##         ###   
      ###     ##    ##              ##    ##     ###      
          ######    ###            ###    ######          
             ##  ########################  ##             
            ##         ###      ###         ##            
            ##           ##    ##           ##            
            ##             ####             ##            
            ##             ####             ##            
            ##          ###    ###          ##            
             ###     ####        ####     ###             
               ######                ######               
                                                          

                  Welcome to React Native!                
                 Learn once, write anywhere               

✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing CocoaPods dependencies (this may take a few minutes)

  Run instructions for iOS:
    • cd "/Users/xgqfrms-mbp/Documents/GitHub/23-design-patterns-app/src/design_pattern_app" && npx react-native run-ios
    - or -
    • Open design_pattern_app/ios/design_pattern_app.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/xgqfrms-mbp/Documents/GitHub/23-design-patterns-app/src/design_pattern_app" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.

➜  src git:(rn-app) ✗ 

```


```sh
$ npx react-native run-ios

$ npx react-native run-android

```

https://aka.ms/ReactNative
