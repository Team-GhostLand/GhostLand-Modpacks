# GhostLand 8
GhostLand 8 modpack.

## Table of Contents
- [Issues](#issues)
- [Changelogs](#changelogs)
- [TODO](#todo)
- [Configs](#configs)
- [Credits/Licensing](#creditslicensing)

## Issues
ALL FIXED!

## Changelogs

### 8.5.0 [WIP]
- Stage II and III got merged
- Opened the Nether
- Opened the Aether
- Opened the Bumblezone
- Added:
  - The Bumblezone
  - Hybrid Aquatic
  - Nether Portal Fix
  - Nether Depths Upgrade
  - Luminous: Nether
  - The Aether
  - Deep Aether
  - Aether Villages
  - Adventure Dungeons
  - Dungeon Crawl
  - Legendary Monsters
  - Bosses'Rise
  - Boss Checklist
  - Create: Interiors
  - Create Jetpack
  - Create: Bells & Whistles
  - CreateBetterFps
  - Sophisticated Storage Create Integration
  - Create Propulsion: Simulated
  - Create: Curios Jetpack & Backtank
  - Create: LazyTick
  - Create: Train Perspective
  - Create: Sophisticated Backpacks Compat
  - Create: Gunsmithing
- Removed:
  - AntiPortals (eyes of ender are stil not craftable (I'm pretty sure))

### 8.4.4
- fix webmap

### 8.4.3
- Added my webmap, and its dependency (Fabric Kotlin)
- Generate some missing configs for things changed all the way back in `8.4.0`

### 8.4.1 - 8.4.3
- KJS patches

### 8.4.0
- Added:
  - Extended AE
  - MEGA Cells
  - ME Requester
  - Advanced AE
  - AppFlux
  - Sophisticated Storage (1.5.70)
  - Trash Cans
  - Oracle Index
  - Hostile Neural Networks
  - Supplementaries
  - AA4 Atlas
  - Powah!
  - Chunk Loaders
  - Create: Power Loader
  - Iron Furnaces
  - A new DC-PRC system, and its lib (Crater)
- Removed:
  - More Mobs
  - Zombie Awareness
  - old Discord PRC system
  - A bunch of unused configs (eg. AdPothr)
- Updated:
  - Soulless
  - Generated a new config list, for all added mods
- Configs:
  - Swapped various SVC keys to None, including Mute (it was conflicting with maps)
  - Fixed Discord
  - Made Surveyor consistent for all players

### 8.3.3
- added: Krypton
- added: PacketFixer *(which claims to be double-sided in the README, **but** Modrinth (and my own understanding of modding) says otherwise, so I'm still marking this update as optional and I hope people will be able to play, tho they MIGHT experience more frequent disconnects due to random network issues, if the mod is only on the server, and MC decides it's fine to send too-big packets, for example - we'll see, ig...)*

### 8.3.2
- added: OBB fix

### 8.3.1
- added: Feature Recycler
- Generated TrueUUID config, finally

### 8.3.0
- DH no longer on server-sided, MAYBE it helps with lags?
- ...and the aero-sable thingy is also gone because it depends on DH on a server

### 8.2.0
- Disable global waypoints
- Fix BCC
- Add a mod for global landmark setting (Dead Reckoning)
- Removed all kopcenie-adjacent things

### 8.1.0
- Let loosers play
  - TrueUUID added
  - offline-mode on
- 16 chunks RD, what could possibly go wrong? 

### 8.0.0
- YOLO!

### 8b28
- no blood
- fix MOTD release date

### 8b27
- Enforce CLO mods to fix Tweakable
- Enforce CLO mods to have maps for everyone

### 8b26
- Added DiscordRPC
- Did maps stuff
- Enabled resourcepacks
- Accidentally restored some Jifo-removed configs (I'm so sorry Jifo; I should've reinstalled the pack, I didn't know Modrinth preserves conflicts between updates)

### 8b25
- Added Tymon's kubejs stuff

### 8b23-8b24
- Added KubeJS and it's addons
- Delete all unused configs

### 8b22
- Move C2ME from the last version to server-only.

### 8b21
- Pushed Jifo-configs:
  - FancyMenu
  - C2ME
  - *both done over previous commits, but there was no version bump, so noone would've been able to install them*
- Install an update to Jifo's AdPother extension
- Restore server-overrides (lol)

### 8b17-8b20
- Bumped version number ~~(bro forgor they can just delete the file if versions overlap lmao)~~

### 8b16
- Updated HT's configs
- Removed Dragged's Tree Chopper
- Changed FancyMenu to modpack mode

### 8b15
- Apply exclusion recommendations from [https://docker-minecraft-server.readthedocs.io/en/latest/types-and-platforms/mod-platforms/modrinth-modpacks/#force-include-files](here) (except EMI (and some addons) and Sinytra), now that we no longer just let the image handle exclusions for us automatically (so that it won't ban EMI and Sinytra).

### 8b14
- Actually restore CRN

### 8b13
- Removed Haunted Environment

### 8b12
- Fix icon

### 8b11
- Set BCC to beta
- Set `MOTD`

### 8b10
- Restore CRN
  - *RIP Vil Nam, tho :(* - you'll be missed
  - ...And Bits'n'Bobs - you, too, will be missed (and fuck you, Azimuth Lib)
- maybe fixed Discord chat

### 8b3 - 8b9
- more Grinch server-exclusions (feat. CRN+BnB+Azmth+LVN, excluded on both sides (lol) for now)

### 8b2
- fix export
- updated gl resourcepack

### 8b1
- Server mods things: Added WHlist Sync, nuked Skin Restorer
- Added `observable_announce` to prevent it from popping up in chat
- Removed IPN's fake configs
- Server-side configs for all!

### 8a22
- Fixed sorting in the diff
- Fixed options again (default View Dist.; textures and clouds *again*)
- Reset DH to default (on), too

### 8a21
- Jifo did changes. He didn't document them, and the diff is a bit wonky (*now has been trained on `grinch i`) - so, lord knows what said things were.

### 8a20
- fix `options.txt` (textures and clouds)

### 8a19
- Copied FancyMenu from GL7 and modiefied it for GL8
- Added updated Soulless
- Removed Quark
- Fixed controls
- Removed Pollution of the Realms (temporarily?)
- Removed Advanced Chimneys (temporarily?)

### 8a18
- Actually launched the modpack (8a17 was untested lol), and can confirm that it works. Also, Pollution generated, like, 2000 config files, so this commit is stupid-large for no real reason
- Nuked IPN worlds again
- Enabled Midnight's resourcepacks
- Made sure Aero tree-chop doesn't destroy the purpose of HT's (ie. let fallen trees be insta-mined or auto-broken if/once they settle)
- Did *the thing* to OK, Zoomer! (c'mon, it fits well with the minimaps...)

### 8a17
- removed Soulless (for now) and Create: Metallurgy (to be *just extra sure* that you can't melt down a brass sheet to brass - which means it's *probably, also* just for now)
- Configured Grinch exclusions (The Grinching)
- Added Jifo's icon
- Configured BCC
- Added mods:
  - AdvChimneys (Jifo)
  - Ambient Env (Guzio)
  - TreeChop for Aero (Midnight)
  - ForgeET (Jifo - lib for AC and Pollution)
  - Observable (Guzio)
  - Pollution (Jifo)
  - Sable DH Render (Midnight)
  - Roads more Traveled (Midnight)
  - Who stopped the Music? (It was Midnight.)
  - *a single more mod*, but it got lost in The Grinching and now I can't find it :< (Guzio) [JK, I knew it was „Haunted Environment”, but I wanted to troll ppl, ]

### 8a16 *(branched after 8a13)*
- updated everything that could be updated, except Sophisticated stuff
- added VanillaTweaks datapacks
- removed: ExtendedAE, Super Factory Manager, ME Requester
- removed "again": Nether Portal Fix, Luminous: Nether
- not removed, so *effectively re-added* the datapack-ish Nether mods, because I don't trust datapack-like things to know how to enable themselves after the world is created: Amplified Nether, Moog's Nether Structures, Fortress Overhaul
- verified that Aether will work (together with Midnight's addition of Accessories (that wasn't done directly here, but will be backported as part of merge conflict resolution), that well and truly takes it off the TODOlist)

### 8a15
- reverted some `options.txt` changes (resourcepacks and clouds being disabled - not the keybinds, tho, as it *seems* Midnight actually researched those quite well, and tbh did a much better job than mine „KILL EVERYTHING NON-VANILLA and let the user deal with the fallout”, tho I haven't actually tested anything for conflicts yet)

### 8a14
- added VanillaTweaks resourcepack
- disabled the Nether
- added GhostLand resourcepack
- removed Luminous: Nether
- removed Amplified Nether
- removed Moog's Nether Structures
- removed Fortress Overhaul
- removed Nether Portal Fix
- added Accessories and some addons

### 8a13
- reset Bridging Mod's enabled status to default (on)
- changed Bridging Mod's preferred method of saying „Block comes here!” from the default distracting, easy-to-miss and Dynamic-Crosshair-breaking custom crosshair (all of this led to BM altogether being disabled before), to a simple hitbox
- made EMI accelerator less obnoxious (no chat messages) and faster (no diagnostics)
- some manual edits it `options.txt`
- removed world-folder-spam from IPN (due to how IPN handles its per-world config, this is annoyingly unfixable, without gitignoring the whole dir, so ig we'll keep removing our test-worlds from it with every commit) and other useless config files (and gitignored them)

### 8a12
- migrated client-optional format
- removed stuff from Sinytra Connector ~~(this will probably have to be done every upload because it seems like that file in particular is `.gitignore`-proof, probably because they felt fancy and put `=============` and `>>` in various places, and now Git thinks I'm resolving a merge conflict)~~ *Git figured itself out, eventually.*
- updated a bunch of mods (or maybe they were updated before, but I didn't regen the configs; I'm not sure)

### 8a11
Redone the modpack from scratch. Collab effort between Guzio, Jifo and Midnight - except the collab was done over Discord previously, so there's no changelog up until this point.

### 8a10
- Removed Async
- Added Soulless (YIPPIEEEEEEE!!!!!!!!!!!!!!!!!!!!!)
- Added PatPat
- Added Animated loading screen

### 8a9
Changelog culled due to being too long and no longer relevant after pack redo - please view it in the commit history if needed (it was last present in 8a16)

### 8a8
What happens in Vegas stays in Vegas

### 8a*Siiiixxxxx Seeeeveeeeeeeeeen*
Changelogs culled due to being too long and no longer relevant after pack redo - please view it in the commit history if needed (it was last present in 8a12)

### 8a5
Changelog culled due to being too long and no longer relevant after pack redo - please view it in the commit history if needed (it was last present in 8a16)

### 8a4
- Numismatics
- Waystones
- Copycats+
- ReEstrogen
- EMI

### 8a3
Changelog culled due to being too long and no longer relevant after pack redo - please view it in the commit history if needed (it was last present in 8a16)

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
Some parts are in Polish, both due to me writing it at 3AM and being tired, and the fact that it was pasted from our Discord originally and some entires weren't translated. It's not like it matters; even if this pack goes public (I mean... Technically, it *already is* because GitHub), it's not like anyone will read the TODO.

### **RIGHT PRZED STARTEM - IMPORTANT!**
- [x] **Better Compat Checker!!!**
- [x] **MOTD!!!**

### Housekeeping:
- [x] VanillaTweaks
- [x] FancyMenu
- [x] Minimapy: Lock AA4 behind the book.
- [x] Minimapy: Check if AA4 and Hoofprint truly can share the same `[M]` key when both are item-gated, and adjust accordingly if not.
- [x] Minimapy: Markery modded rzeczy
- [x] Minimapy: Ensure server sharing
- [x] CraftPresence: add
- [x] CraftPresence: config
- [x] Worlds: Remake spawn-world *AGAIN (Midnight set the datapacks wrongly, noooooooo :< )*
- [x] Fixes: Disable blood
- [x] Wyłączyć Nether portal (End alr disabled by default)
- [x] Palmer&Kanciarz ideas (ME Requester, Extended AE, AE2 Wireless, Super Factory Manager, MEGA Cells) - na razie wywalić; będą w Nether Update (nie licząc SFM (Programming Update), MEGA Cells (TBD), AE2 Wireless (*FINE!*, have it early, but we'll have to make it more expensive))
- [x] Luminous Nether - na razie wywalić; będzie w Nether Update (razem z tym modem który poleca, Luminous Tag)
- [x] Soulles - na razie wywalić; będzie w Nether Update (cuz it unlocks soul sand too early)
- [x] Jifo's icon
- [x] Discord bridge
- [x] Whitelist Sync
- [x] Configure Grinch exclusions
- [x] Configure Grinch server-side and client-side configs
- [x] Clean up and add our old texturepack
- [x] Replace Curious with Accessories for future Aether compat (actually, test if Aether even would work as things are now, AND THEN REMOVE IT)
- [x] Jifo: Pollution
- [x] Make sure Aero tree-chop doesn't destroy the purpose of HT's (ie. let fallen trees be insta-mined)

### Meta:
- [ ] dokumentacja minimap
- [ ] dokumentacja zmiany wersji
- [x] ustawić ghostland.ovh na proper IP
- [x] update #┆📑┆in-game-lore
- [x] Configure server for Discord bridge and Whitelist Sync (add secrets passthrough for bots and DB, and make it `network: host`)
- [x] Update website
- [ ] Open the ports for VoiceChat, if not set yet?
- [ ] Fix JifoCC agent, so that it reports a proper playercount, max-payers and version; bonus points for differentiating between server starting and server running (`docker container inspect -f "{{.State.Health.Status}}" <container name>`)
- [ ] Let Poltergeist manage screenshot

### Balancing/staging/progression:
#### STAGE ONE, LAUNCH:
- [x] Super-EZ bundles (on this version, they still need rabbit hide; normal leather would be ideal, and ideal-er if lether was made from Zombie drops, which is actually a Vanilla Tweaks thing that I thing imma add as part of that point in the Housekeeping section)
- [x] Vanilla story progress-gating za modami przygodowymi (notably - make Aether (put eg. Barrier Block as a placeholder until Aether is added) needed for the Ender Eye in some way (this can be done later) - and ofc more stuff, but I don't actually know vanilla well enough to tell what'd be good to put here)
- [x] Vanilla early-game equipment progress-gating za generic-rzeczami z tech-modów (plates for armor and shields).
- [x] Vanilla late-game equipment progress-gating: nether-gate diamond armor (make it take rose quartz). **Note: it won't be nether-gated but will be harder to get as it needs villager trading**
- [x] Make top-tier Oritech stuff gated behind The End in some way *[notably - make the armor and tools be upgrades from Netherite (which end-gates things, see stage two), if they're OP (their OPness is TBD, actually), same OP-ness-gauging-and-optional-End-gating-if-too-OP-and/or-not-endgated-already applies to their various fantasy metals; also, End Gating (maybe not Netherite, but still in some way) should apply any OP power-gen (eg. nuclear power - see staging timelines below) and the Particle Accelerator(???) thing that makes black holes (if it's not needed for various crucial recipes (sounds like it could be) - if it is, it should at least need Netheite scrap (to force them to (literally) fight for it - see stage two) instead)]* if it isn't already (either directly or via the machines needed to make them) - they *do* have an Enderite material, after all, so its uses must be investigated. Also, the nukes should need Netherite scraps, if the machines needed to make them aren't End-gated already (basically, either nukes are more expensive, or won't unlock for a while).
- [x] Make Create brass sheet craftable without Nether-gating, at the cost of being much more expensive than the netherful version (it may seem OP, but remember that the brass sheets *by themselves* cannot be used for much, except some decor, the deployer (needed for some recipes (*raiiilssss.......*), and MANY early-game-useful contraptions, eg. a drill) and some BASIC item sorting stuff (smart chutes - but not eg. tunnels/funnels) - so it nicely tracks with how Oritech progression is supposed to be organized (see stage two), ie. „You CAN have a complex factory from the get-go, but it's gonna be annoying AF and gonna take up a ton of space. Gets easier with Stage Two”), ONCE we confirm that brass sheets cannot be re-melted into an ingot (if it can - idk, we need an emergency meeting to figure out what to do). No need to gatekeep any OP armors and stuff because, well, Create doesn't have them (maybe the lava-diving suit, but that needs Netherite already). **Quartz can be acquired without going to the Nether so electron tubes don't need changes**
- [x] Maybe make the Deep Dark actually useful for anything (can't think of a specific thing; maybe the Eye of Ender again (would fit the game's story well, too, actually) or even something at a much later stage, think Stage 3). Same about the Trial Chambers' Heavy Core (speaking of which, the Mace could also be made so that it needs some later-stage ingredients, but idk.) *Deep Dark can be done later by installing Deeper Darker.*
- [x] Remove all Netherite recipes untill stage three
- [ ] Remove brass from loot chests
- [ ] Remove Echo shards from sky loot chests (sky is neither deep nor dark)

#### STAGE TWO, GETTING HOT:
- [ ] Enable the portals (bruh)
- [x] Now the Ender Eye REALLY gets important as a balancing element - nerf it if wasn't done before
- [x] Balance Create: Ultimate Factory (remove the apple -> Chorus haunting recipe if Chorus indeed used as an end-gater; remove Nether Bricks -> Netherite Scrap)

##### Notes:
- This is all a *rough draft*, still. It was brainstormed with Midnight in less than 5min., as a result of an argument over brass hands. Balancing and progression is mostly meant to be handled by Tymuś, so his decisions take absolute precedence here. I also know that this is *a lot* of stuff to ask for, and the time is short (only until Friday), so some content can just be fully cut-out in the #1 version (make it use  barrier as a placeholder in the recipe, or something) if more time for proper planning and research is needed. There's nothing wrong with a day-one patch (or... day-3 or 4 or something).
- Beyond this, there is no clear plan - following stages (and the rest of Stage Two) are therefore only outlines of *what we want to achieve* and not *how*.

##### STAGE TWO, GETTING HOT (continuation):
- Will naturally let your Create factories go BIG (Blaze Burners - both a good power source (Steam Engine) and a key crafting component (can cook bronze and zinc into that *sweet, sweet* brass) - will be unlocked).
- AE2 stuff here (see Palmer's suggestions in Housekeeping sections) - will do the same thing to OriTech (assuming all OT users will also be hardcore AE2 users, which is very likely) as Nether does to Create, if Palmer is to be believed.
- Overall, focused on letting your factories be optimized (faster, smaller, less frustrating to build). Not much in terms of adventure happening here, except the Nether itself being harder (Luminous stuff).

#### STAGE 3, PROGRAMMING:
- Advanced factory automation via programming (Palmer's PC mod thing, see Housekeeping; maybe something for Create, too, or ComputerCraft or something)
- ...which gives an excuse to add Hex Casting (it's a cool programming mod, that's somehow more of an adventure mod that a tech-mod, which is nice)...
- ...which should be gate-kept behind Aether, thus giving an excuse to add Aether. (INTEGRATION IDEAS: Make spells come from the chests there - so that people who already looted a bunch of chests aren't suddenly super-far behind on spell discovery; make Aether a good amethyst source (I remember, back in the day it had Amethyst glove and stuff, idk how it behaves nowadays with vanilla amethyst, but there's probably a connection to be made))
- Also, the bee dimension can be added beyond this point (not earlier) if Revi request it.
- Overall, despite the name, this update is mostly adventure-focused (the immense amount of Aether's adventure content easily offsets, like, 2 days anyone's gonna spend digitalizing their factories - and even more-so if Bumblezone is added, and evener morer-so when you consider Hex Casting is a mini-adventure in its own way, given how you discover most spell scrolls via looting chests)

#### BEYOND:
##### Updates without a clear plan yet:
- The End Update (will unlock the OPiest of stuff in OriTech (notably, nuclear stuff) and maybe also Mega Cells go here; due to the introduction of nuclear tech to OriTech, something nuclear for Create could go here) - this one *has to* come (even if the plan isn't clear yet), the rest beyond this point is *dubious*.
- Space Age: If any Aeronautics addons for space appear. Also, this is where Dyson Cube can be added.
- Draconic and Modern Industrialization somewhere in here, maybe, too. Or even later-than-here (like post-space age, stage 6 for example).
##### Ongoing procedures:
- Respond to players' request to add mods as they come (no need to wait for a big update - if the mod is cool, we can make a tiny patch for it), if they wouldn't crash into the progression at the stage the server is at. If they would - schedule it to be added later (eg. the bees dimension thing).
- Progressively make the game harder (annoying-er mobs, maybe new bosses, less chance of Creepers confetting, maybe more Luminous stuff becasue they seem nicely thought-out).

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
* [There's a datapack that removes oil, taken from CurseForge - it's CC0 Public Domain.](https://www.curseforge.com/minecraft/data-packs/oritech-disable-oil-springs#license)
* We also have some VanillaTweaks stuff added via overrides (properly listed in `overides/credits.txt`, [as per their request](https://vanillatweaks.net/terms/)) and some random resourcepack that someone added (idk who, it's from the Discord-collab era, so I can't `git blame` it) and gave zero licensing info about, so, uhh... *Hope we don't get sued!*