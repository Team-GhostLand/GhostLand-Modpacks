# GhostLand 8
GhostLand 8 modpack.

## Table of Contents
- [Issues](#issues)
- [Changelogs](#changelogs)
- [TODO](#todo)
- [Configs](#configs)
- [Credits/Licensing](#creditslicensing)

## Issues
Actually, I think **none**! ~~This is the least broken GhostLand in history lol.~~

## Changelogs

### 8a13
- reset Bridging Mod's enabled status to default (on)
- changed Bridging Mod's preferred method of saying „Block comes here!” from the default distracting, easy-to-miss and Dynamic-Crosshair-breaking custom crosshair (all of this led to BM altogether being disabled before), to a simple hitbox
- made EMI accelerator less obnoxious (no chat messages) and faster (no diagnostics)
- some manual edits it `options.txt`
- removed world-folder-spam from IPN (due to how IPN handles its per-world config, this is annoyingly unfixable, without gitignoring the whole dir, so ig we'll keep removing our test-worlds from it with every commit) and other useless config files (and gitignored them)

### 8a12
- migrated client-optional format
- removed stuff from Sinytra Connector (this will probably have to be done every upload because it seems like that file in particular is `.gitignore`-proof, probably because they felt fancy and put `=============` and `>>` in various places, and now Git thinks I'm resolving a merge conflict)
- updated a bunch of mods (or maybe they were updated before, but I didn't regen the configs; I'm not sure)

### 8a11
Redone the modpack from scratch. Collab effort between Guzio, Jifo and Midnight - except the collab was done over Discord previously, so there's no changelog up until this point.

### 8a10
- Removed Async
- Added Soulless (YIPPIEEEEEEE!!!!!!!!!!!!!!!!!!!!!)
- Added PatPat
- Added Animated loading screen

### 8a9
- Removed Railways Untold (it will be added back if it's bugs will be fixed)
- Removed Create Waystone Recipes
- Removed Create Design'n'Decor
- Removed Amendments
- Removed everything Xaero
- Added Keybind Bundles

### 8a8
What happens in Vegas stays in Vegas

### 8a*Siiiixxxxx Seeeeveeeeeeeeeen*
Changelogs culled due to being too long and no longer relevant after pack redo - please view it in the commit history if needed (it was last present in 8a12)

### 8a5
- Biomes removed from Biomes we've Gone:
	- Dead Sea
	- Lush Stacks
- Tried to change some ATM propaganda into GL propaganda
- Renamed our resourcepack to GhostPack *[NOTE: From testing on 8a6 - I don't think it worked: Still shows up as „MichauBreaksStuff” with „GhostLand kurwa” description; also, pack version is wrong]*
- Added RoadWeaver
- Added Watermedia + Waterframes (Internet in Minecraft)

### 8a4
- Numismatics
- Waystones
- Copycats+
- ReEstrogen
- EMI

### 8a3
- Removed unwanted mods
	- Waystones
	- JourneyMap -> Xaero's
	- e4mc
- Add wanted mods
	- Create Power Grid
	- WhlSync 2
	- SmallShips
	- Immersive Melodies
	- Immersive Paintings
	- Dungeons and Taverns
	- Just Blahaj (very important)
	- Tectonic
	- Craft Presence
	- 3D Skin Layers
	- SVC
	- Chat Heads
	- Discord Chat Connect
	- Railways Untold
- Resourcepack from GL7

### 8a2
- We decided that using an existing modpack would be easier so we will be using All the Mods
- NeoForge 1.21.1
- Has everything from All the Mods except it has gravestones instead of tombstones


### 8a1
- GhostLand 8 base by MidnightSP
- Forge 1.20.1
- main mods: GregTechCEu, Create, Tetra
- I'm not gonna go into details

## TODO
Pasted the TODO from Discord. Polish, incomplete and outdated - but better than a `[TBD]`

### Housekeeping:
* VanillaTweaks
* FancyMenu
* Map lock
* BCC
* ~~wyłączyć portale~~
* ~~Palmer ideas~~
* dać ikonkę od Jifo
* na serwerze, ustawić Discord bridge

### Meta:
* dokumentacja minimapy
* dokumentacja zmiany wersji
* ustawić ghostland.ovh na proper IP
* update #┆📑┆in-game-lore

### Balancing/staging:
* Config stuff discussed earlier; AFAIK you have your own TODOlist, so I won't trip over you, and instead just let you put it here yourself, *natomiast, jeśli pamiętam, to było roughly:*
* Progress-gating za general rzeczami z tech-modów (plates for armor and shit)
* Add OriTech and slow down its progression
* Optionally add KubeJS, if you prefer that over datapacks for doing progression-control stuff
* Idk, pamiętam coś jeszcze, ale nie kojarzę co. There's a reason why I said I shouldn't be the one making this todo for you.

## Configs
- Vanilish
  - Cleared various nags, eg. Narrator Narrator, Multiplayer Scare, or popups (Vanilla *Various UIs* and manual `options.txt` changes)
  - Polish main lang (Vanilla Options - set via Language Reload); English fallbacks (Language Reload (and Vanilla, in so far as EN_US being the default fallback always))
  - Keybinds. (Vanilla Options - set via Controlling)
  - Fullscreen off (BOTH Vanilla Options AND CubesWithoutBorders - both set via Sodium)
  - GUI Scale to 2 (Vanilla Options - set via Sodium)
  - FPS overlay on, not extended, with coords, and set to the right (Sodium Extras)
  - Advanced Tooltips; no Pause on Lost Focus (Vanilla F3+*x* - tho adv. ttps. can also be enabled via Sodium Extras)
  - Other stuff in Sodium, and Sodium extras, and also vanilla settings they can set. Probably, idk. They have a built-in system for documenting departures from the defaults, so I won't bother listing it all.
- Disabled annoying biomes in `config/biomeswevegone/world_generation.json`
- Begun FancyMenu (thus far, I only removed some widgets from the title screen and the pause menu, thus making everything look weird lol)
- Bridging Mod
  - see: 3a13
- IPN:
  - reworked 1 (one) screen-that-overlaps-with-EMI
  - hidden annoying purple arrows


## Guides
read the main readme and you are probably fine

## Credits/Licensing
* Modpack licensed under MIT.
* No\* extrta content added via overrides *(yet)*, and any previous connection to ATM10 was fully severed, so we're in the clear in terms of licensing.
* \*[Actually, there's a datapack that removes oil, taken from CurseForge - but it's literally CC0 Public Domain, so we're good.](https://www.curseforge.com/minecraft/data-packs/oritech-disable-oil-springs#license)