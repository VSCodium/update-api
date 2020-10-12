# update-api

A small server that VSCodium calls to check for the latest release on GitHub. See the [Auto Update Support project](https://github.com/VSCodium/vscodium/projects/1) and the [original issue](https://github.com/VSCodium/vscodium/issues/41) for more context.

**Note:** Even though the description for the `update.mode` setting in VSCodium says "The updates are fetched from a Microsoft online service", the build script [sets the `updateUrl` field](https://github.com/VSCodium/vscodium/blob/master/prepare_vscode.sh#L36) in `product.json` to https://vscodium.now.sh, so Microsoft's update service isn't actually called.
