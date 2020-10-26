# Flutter


```sh
# simulator / emulator
$ open -a Simulator

```

```sh
# env
$ flutter doctor

# create
$ flutter create design_pattern_app

# dev
$ flutter run

# multi devices
$ flutter devices
$ flutter run -d all

```

https://github.com/flutter/flutter

https://github.com/flutter/flutter/releases

https://flutter.dev/docs/get-started/install/macos

```sh
$ flutter -h
$ flutter --version

$ flutter upgrade
# Flutter 1.17.5

```

```sh
➜  23-design-patterns-app git:(master) ✗ flutter --version
Flutter 1.17.3 • channel stable • https://github.com/flutter/flutter.git
Framework • revision b041144f83 (4 weeks ago) • 2020-06-04 09:26:11 -0700
Engine • revision ee76268252
Tools • Dart 2.8.4

```

```code
➜  23-design-patterns-app git:(master) ✗ flutter -h
  ╔════════════════════════════════════════════════════════════════════════════╗
  ║ A new version of Flutter is available!                                     ║
  ║                                                                            ║
  ║ To update to the latest version, run "flutter upgrade".                    ║
  ╚════════════════════════════════════════════════════════════════════════════╝


Manage your Flutter app development.

Common commands:

  flutter create <output directory>
    Create a new Flutter project in the specified directory.

  flutter run [options]
    Run your Flutter application on an attached device or in an emulator.

Usage: flutter <command> [arguments]

Global options:
-h, --help                  Print this usage information.
-v, --verbose               Noisy logging, including all shell commands executed.
                            If used with --help, shows hidden options.
-d, --device-id             Target device id or name (prefixes allowed).
    --version               Reports the version of this tool.
    --suppress-analytics    Suppress analytics reporting when this command runs.
    --packages              Path to your ".packages" file.
                            (required, since the current directory does not contain a ".packages" file)

Available commands:
  analyze                  Analyze the project's Dart code.
  assemble                 Assemble and build flutter resources.
  attach                   Attach to a running application.
  bash-completion          Output command line shell completion setup scripts.
  build                    Flutter build commands.
  channel                  List or switch flutter channels.
  clean                    Delete the build/ and .dart_tool/ directories.
  config                   Configure Flutter settings.
  create                   Create a new Flutter project.
  devices                  List all connected devices.
  doctor                   Show information about the installed tooling.
  downgrade                Downgrade Flutter to the last active version for the current channel.
  drive                    Runs Flutter Driver tests for the current project.
  emulators                List, launch and create emulators.
  format                   Format one or more dart files.
  generate                 run code generators.
  install                  Install a Flutter app on an attached device.
  logs                     Show log output for running Flutter apps.
  make-host-app-editable   Moves host apps from generated directories to non-generated directories so that they can be edited by developers.
  precache                 Populates the Flutter tool's cache of binary artifacts.
  pub                      Commands for managing Flutter packages.
  run                      Run your Flutter app on an attached device.
  screenshot               Take a screenshot from a connected device.
  symbolize                Symbolize a stack trace from an AOT compiled flutter application.
  test                     Run Flutter unit tests for the current project.
  upgrade                  Upgrade your copy of Flutter.
  version                  List or switch flutter versions.

Run "flutter help <command>" for more information about a command.
Run "flutter help -v" for verbose help output, including less commonly used options.

```
