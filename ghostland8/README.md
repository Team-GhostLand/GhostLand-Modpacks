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
  - *a single more mod*, but it got lost in The Grinching and now I can't find it :< (Guzio)

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

### Housekeeping:
- [x] VanillaTweaks
- [ ] FancyMenu
- [ ] Minimapy: Lock AA4 behind the book. Also, check if AA4 and Hoofprint truly can share the same `[M]` key when both are item-gated, and adjust accordingly if not.
- [x] Better Compat Checker
- [x] Wyłączyć Nether portal (End alr disabled by default)
- [x] Palmer&Kanciarz ideas (ME Requester, Extended AE, AE2 Wireless, Super Factory Manager, MEGA Cells) - na razie wywalić; będą w Nether Update (nie licząc SFM (Programming Update), MEGA Cells (TBD), AE2 Wireless (*FINE!*, have it early, but we'll have to make it more expensive))
- [x] Luminous Nether - na razie wywalić; będzie w Nether Update (razem z tym modem który poleca, Luminous Tag)
- [x] Soulles - na razie wywalić; będzie w Nether Update (cuz it unlocks soul sand too early)
- [ ] Jifo's icon
- [ ] Discord bridge
- [ ] Whitelist Sync
- [x] Configure Grinch exclusions
- [ ] Configure Grinch server-side and client-side configs
- [x] Clean up and add our old texturepack
- [x] Replace Curious with Accessories for future Aether compat (actually, test if Aether even would work as things are now, AND THEN REMOVE IT)
- [x] Jifo: Pollution
- [ ] Make sure Aero tree-chop doesn't destroy the purpose of HT's (ie. let fallen trees be insta-mined)

### Meta:
- [ ] dokumentacja minimapy
- [ ] dokumentacja zmiany wersji
- [x] ustawić ghostland.ovh na proper IP
- [ ] update #┆📑┆in-game-lore
- [ ] Configure server for Discord bridge and Whitelist Sync (add secrets passthrough for bots and DB, and make it `network: host`)
- [ ] Update website (pls, Jifo, don't overvibe the whole code beyond readability)

### Balancing/staging/progression:
#### STAGE ONE, LAUNCH:
- [x] Super-EZ bundles (on this version, they still need rabbit hide; normal leather would be ideal, and ideal-er if lether was made from Zombie drops, which is actually a Vanilla Tweaks thing that I thing imma add as part of that point in the Housekeeping section)
- [ ] Vanilla story progress-gating za modami przygodowymi (notably - make Aether (put eg. Barrier Block as a placeholder until Aether is added) needed for the Ender Eye in some way (this can be done later) - and ofc more stuff, but I don't actually know vanilla well enough to tell what'd be good to put here)
- [ ] Vanilla early-game equipment progress-gating za generic-rzeczami z tech-modów (plates for armor and shields).
- [ ] Vanilla late-game equipment progress-gating: nether-gate diamond armor (make it take rose quartz).
- [ ] Make top-tier Oritech stuff gated behind The End in some way *[notably - make the armor and tools be upgrades from Netherite (which end-gates things, see stage two), if they're OP (their OPness is TBD, actually), same OP-ness-gauging-and-optional-End-gating-if-too-OP-and/or-not-endgated-already applies to their various fantasy metals; also, End Gating (maybe not Netherite, but still in some way) should apply any OP power-gen (eg. nuclear power - see staging timelines below) and the Particle Accelerator(???) thing that makes black holes (if it's not needed for various crucial recipes (sounds like it could be) - if it is, it should at least need Netheite scrap (to force them to (literally) fight for it - see stage two) instead)]* if it isn't already (either directly or via the machines needed to make them) - they *do* have an Enderite material, after all, so its uses must be investigated. Also, the nukes should need Netherite scraps, if the machines needed to make them aren't End-gated already (basically, either nukes are more expensive, or won't unlock for a while).
- [ ] Make Create brass sheet and the electron tube craftable without Nether-gating, at the cost of being much more expensive than the netherful version (it may seem OP, but remember that the brass sheet and electron tubes *by themselves* cannot be used for much, except some decor, the deployer (needed for some recipes (*raiiilssss.......*), and MANY early-game-useful contraptions, eg. a drill) and some BASIC item sorting stuff (smart chutes - but not eg. tunnels/funnels) - so it nicely tracks with how Oritech progression is supposed to be organized (see stage two), ie. „You CAN have a complex factory from the get-go, but it's gonna be annoying AF and gonna take up a ton of space. Gets easier with Stage Two”), ONCE we confirm that brass sheets cannot be re-melted into an ingot (if it can - idk, we need an emergency meeting to figure out what to do). No need to gatekeep any OP armors and stuff because, well, Create doesn't have them (maybe the lava-diving suit, but that needs Netherite already).
- [ ] Maybe make the Deep Dark actually useful for anything (can't think of a specific thing; maybe the Eye of Ender again (would fit the game's story well, too, actually) or even something at a much later stage, think Stage 3). Same about the Trial Chambers' Heavy Core (speaking of which, the Mace could also be made so that it needs some later-stage ingredients, but idk.) *Deep Dark can be done later by installing Deeper Darker.*
- [ ] Review Quark (Palmer labelled it as QoL, which is usually a Red Flag, cuz his definition of QoL is „will literally do everything for you”) and balance if needed.

#### STAGE TWO, GETTING HOT:
- [ ] Add Soulles
- [ ] Enable the portals (bruh)
- [ ] Now the Ender Eye REALLY gets important as a balancing element - nerf it if wasn't done before
- [ ] Vanilla late-game equipment progress-gating: end-gate Netherite (make it take Chorus or something).
- [ ] Yeet Netherite from Oritech's forge (so that it won't break the balancing act above)
- [ ] Netherite scrap drops gated behind The Furnace boss from Luminous Nether, AND NOT generate as Ancient Debris (add a scrap->debris smelting recipe (basically invert the vanilla one lol), for decoration (expensive, but - y'know - a flex) and in case debris are needed for something)
- [ ] Balance Create: Ultimate Factory (remove the apple -> Chorus haunting recipe if Chorus indeed used as an end-gater; remove Nether Bricks -> Netherite Scrap)
- [ ] Double-check Create: Metallurgy to make sure it doesn't do the same thing as the Forge from OriTech to Netherite

##### Notes:
- This is all a *rough draft*, still. It was brainstormed with Midnight in less than 5min., as a result of an argument over brass hands. Balancing and progression is mostly meant to be handled by Tymuś, so his decisions take absolute precedence here. I also know that this is *a lot* of stuff to ask for, and the time is short (only until Friday), so some content can just be fully cut-out in the #1 version (make it use  barrier as a placeholder in the recipe, or something) if more time for proper planning and research is needed. There's nothing wrong with a day-one patch (or... day-3 or 4 or something).
- Beyond this, there is no clear plan - following stages (and the rest of Stage Two) are therefore only outlines of *what we want to achieve* and not *how*.

##### STAGE TWO, GETTING HOT (continuation):
- Will naturally let your Create factories go BIG (Blaze Burners - both a good power source (Steam Engine) and a key crafting component (can cook bronze and zinc into that *sweet, sweet* brass) - will be unlocked).
- AE2 stuff here (see Plamer's suggestions in Housekeeping sections) - will do the same thing to OriTech (assuming all OT users will also be hardcore AE2 users, which is very likely) as Nether does to Create, if Palmer is to be believed.
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