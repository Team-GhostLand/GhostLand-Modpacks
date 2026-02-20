# GhostLand Modpacks Repository

This repo contains multiple Grinch-managed Minecraft modpack variants plus shared tooling/config.

## What is included
- ghostland7/ - GhostLand 7 pack (full pack contents, overrides, server overrides).
- ghostland8/ - GhostLand 8 pack (alpha).
- grun/ - GhostRun Winter 2025/26 server-focused pack.
- grun-jifo/ - GhostRun Winter 2025/26 JIF0 variant (server-focused).
- grun-cm/ - CraftMine Winter 2025/26 variant.
- grinch.kdl - Grinch configuration that defines all packs and paths.

## Pack README
The detailed changelogs, guides, and pack notes live in ghostland{version-number}/README.md.

## Grinch

### Import
- change `default modpack` in `grinch.kdl` to modpack you want to import
- put your mrpack in the main folder
- use `grinch import {yourmodpackname}` and it will be imported by grinch

### Export
- change `default modpack` in `grinch.kdl` to modpack you want to export
- use `grinch export {flags}` and it will be imported by grinch
- import mrpack created by grinch in main folder using modrinth