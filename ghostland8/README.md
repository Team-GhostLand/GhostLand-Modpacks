# GhostLand 8
GhostLand 8 modpack.

## Table of Contents
- [Issues](#issues)
- [Changelogs](#changelogs)
- [TODO](#todo)
- [Configs](#configs)
- [Credits/Licensing](#creditslicensing)

## Issues
Actually, I think none!

## Changelogs

### 8a11
*Minor bugfix.*

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

### 8a7
- Configured almost all Waystones settings, except for making sure that you can't craft/drop them (that's done with datapacks), sharing (I think it still needs some nuance; just a blanket-setting for `"GLOBAL"` might be a bit broken, in terms of eg. name edits), and cost - for which I have prepared the following algorithm, but I didn't paste it yet because I'm not sure what would be our base currency unit in the Cebulion system (see at the bottom):
```waystones
Disallowed TP methods:
[target_is_not_waystone, target_is_not_warp_plate] refuse(Sorki, na GhostLandzie można teleportować się tylko do portstoneów, zwykłych Waystoneów lub scrolli powrotu/powiązania, albo płytka-płytka. Wybrany przez Ciebie cel teleportu nie jest dozwolony.)
[source_is_sharestone] refuse(Sorki, na GhostLandzie można teleportować się tylko do portstoneów, zwykłych Waystoneów lub scrolli powrotu/powiązania, albo płytka-płytka. Wybrane przez Ciebie źródło teleportu, Sharestone, nie jest dozwolone.) #Sharestones are too private (despite the name - they're color-coded, unlike „single-channel” Waystones)
[source_is_warp_scroll] refuse(Sorki, na GhostLandzie można teleportować się tylko do portstoneów, zwykłych Waystoneów lub scrolli powrotu/powiązania, albo płytka-płytka. Wybrane przez Ciebie źródło teleportu, Warp Scroll, nie jest dozwolone.) #Too OP: Multiple-choice destination
[source_is_warp_stone] refuse(Sorki, na GhostLandzie można teleportować się tylko do portstoneów, zwykłych Waystoneów lub scrolli powrotu/powiązania, albo płytka-płytka. Wybrane przez Ciebie źródło teleportu, Warp Stone, nie jest dozwolone.) #Too OP: Multiple-choice destination
[source_is_inventory_button] refuse(Inventory Button do teleportu nie powienien w ogóle być włączony. Jeśli widzisz tą wiadomość, zgłoś to Administracji.)

Mixed signals:
[source_is_warp_plate, target_is_not_warp_plate] refuse(Za pomocą płytek można teleportować się tylko płytka-płytka, a nie z płytki do gdziekolwiek-próbowałeś.)
[source_is_not_warp_plate, target_is_warp_plate] refuse(Za pomocą płytek można teleportować się tylko płytka-płytka, a nie do płytki z gdziekolwiek-próbowałeś.)

Extra restrictions:
[is_with_leashed] refuse(Hej hej hej, ale transport zwierząt tylko w wagonie do bydła! Jedź pociągiem nie Waystonem.) #We could just disabled TP-with-leashed, but it's more funny when the Waystone gets upset with you.
[is_on_any_vehicle] refuse(Siedzisz już na pojeździe/wierzchowcu - jedź se nim. Po co ci waystone?)
[is_wearing_any_armor, source_is_not_return_scroll, source_is_not_warp_plate, target_is_not_warp_plate] refuse(Sorki, ze względu na kontrolę graniczną teleportacja w zbroi jest niemożliwa. Wyskakuj z gaci!)
[is_not_interdimensional, is_not_within_distance(300), source_is_warp_plate, target_is_warp_plate] refuse(Płytki służą tylko do krótko-dystansowej nawigacji, na przykład z jednego piętra bazy na inne, jak winda. Na dłuższy dystans proszę użyć jakiegoś bardziej zaawansowanego środka transportu.)
[is_interdimensional, source_is_warp_plate, target_is_warp_plate] refuse(Płytki służą tylko do krótko-dystansowej nawigacji, na przykład z jednego piętra bazy na inne, jak winda. Na między-wymiarowy dystans proszę użyć jakiegoś bardziej zaawansowanego środka transportu.)
[is_not_interdimensional, is_within_distance(800), source_is_not_bound_scroll, source_is_not_return_scroll, source_is_not_warp_plate, target_is_not_warp_plate] refuse(Teleportujesz się na mniej niż 800 kratek, serio? Weź ty już lepiej pieszo idź lub metrem jedź. Co, mamusia nóżek nie dała?)
[is_not_interdimensional, is_not_within_distance(3000), source_is_not_bound_scroll, source_is_not_return_scroll] refuse(Ponad 3000 kratek to za daleko dla teleportu bez scrolla. Sorki.)


Cost calculations:
[source_is_waystone, is_not_interdimensional] scaled_add_item_cost(distance, [CURRENCY], 0.01) #8-30
min_item_cost([CURRENCY], 10)
max_item_cost([CURRENCY], 16)
[source_is_waystone, is_interdimensional] add_item_cost([CURRENCY], 24)
[is_with_pets] add_item_cost([CURRENCY], 2)
```
- Begun serious work on FancyMenu (gave it our logo and redone the buttons). Now it's only missing background audio and background images.

### 8a6
- Added mods:
	- LibVilNam (as a JAR for now, but hopefully Modrinth will approve until full release)
	- Various Create addons (I can recall Nuclear, Big Cannons, Steam'n'Rails, Slice'n'Dice - but there were a LOT more, I just don't remember all)
	- Dynamic lights: LambdynamicLights; Create: Dynamic Lights
	- other „Dynamic X” mods because I noticed them while searching for above: DynamicFPS; Dynamic Crosshair; DynamicSurroundings
	- Some ambient mods (inspired by DS above). Don't fully remember what, but it was mostly sound- and grass-related
	- Sodium and a bunch of mods from its „orbit”, like for example: Continuity, Cubes without Borders, various Sodium addons, various server-perf stuff (C2ME, ServerCore, Lithium, Chunky (with offline-gen datapack-mod), etc.), various async-ifiers
	- Serillum: spawn w wiosce, healing i spawn-proofing od ognisk
	- *MISC.:* Better Archeology; JLine; Headpats; Alloy Forgery; probably a bunch more, but I don't remember anymore
	- Libraries and similar: Sinytra Connector (CICADA->Headpats, Continuity, Alloy Forgery, JLine) and its sister-mod Forgified Fabric API; CICADA; Collective (for Serillum stuff); Whatever stuff got auto-added
- Removed mods:
	- Mo' Structures and its config library Omega (OmegaConfig was breaking Architectury, when combined with *something* I added - I was unable, however, to find out what exactly that was, so I nuked Mo' Structures and Omega instead)
	- Embeddium (replaced with the Sodium ecosystem)
	- Create: Crafts'n'Additions (replaced with Create: Power Grid) and one more Create addon, I think (can't remember which one)
- Updated:
	- AE2 addons (saw in 2 different descriptions that one had a dupe patched, and another had an item-voider fixed - and that was enough to convince me that they all probably need to be kept up-to-date), except MegaCells that was actually downdated (by one patch-bump - because that older version was on Modrinth)
	- **Java from 21 to 25** *(This is not reflected in the pack because Modrinth doesn't allow that, **but should instead serve as a heads-up that anyone working on this needs to do the same on their end!**)*
	- Some libs that other mods said they needed a newer version of
	- Railways Untold
	- NeoForge itself
	- various shaders
- Added resourcepacks:
	- Simple Grass Flowers
	- Translations for Sodium
- Begun the long and ardous journey of making this serverpack-friendly:
	- Moved WhiteList Sync 2 to server-only
	- Moved the 2 new mods as server-only: JLine (cuz it *is* a server mod) and Create: Dynlight (it TECHNICALLY should be installed on both sides for the best experience (tho it works both server-only (it just won't respond to your local dynamic lights mod blocklist, and it's gonna be light-block based, so a bit choppy) and client-only (it just won't react to environment, by eg. preventing spawns)), but client-side wasn't working without Sodium Dynamic Lights (see: it should respond to its settings), but we're using LambdynamicLights because Sodium's were breaking C2ME)
	- Moved server-related configs and the icon to `server-overrides`, and set some early `REMOVALS.txt`
	- No more stupid scripts that we'll not use, anyway.
	- Marked shaders and resourcepacks as client-only
- Settings changed:
	- Some random graphics stuff that HOPEFULLY will be non-controversial (eg. no viniette, no fullscreen by default, no FPS cap, some dynamic lights and culling changes, FPS counter on the right to avoid minimap conflicts, shadowy paths, other various stuff)
	- Reduced default graphics-intense stuff (only 2 chunks render, 5 chunks simulation, no shaders). The rationale behind low defaults is that if someone with a beefy PC notices that the defaults are ass, they can just increase them. On the other hand, someone with an ass PC can unknowingly implode their computer if they join without lowering the settings first.
	- Cleared various pop-ups (eg. multiplayer, Sodium sponsor, resourcepack compat warnings, `observable_announce` whatever that is)
	- For the ease of dev: advanced tooltips on, and pause-on-lost-focus off
	- Polish as the no. 1 language, with various English-es as fallbacks (oh, yea... I also added Language Reload)
	- Enabled all added resourcepacks, our pack, and reorganized some defaults
- Very early beginnings of FancyMenufication (just changed 2 backgrounds, and it's not even their final form yet)
- Cleared out spam from `config/` (`.bak` files) and from `mods/` (PackWiz stuff)
- *Things considered, but not added - and why:*
	- BindPizzeria: Doesn't seem to be present on 1.21.1 NeoForge (didn't search for older/Fabric). Tried installing KeyBind Bundles, but it turned out that it's already present, just as a CurseForge JAR. Modrinth version was a whole minor-bump older, so I was afraid to replace the newer one with it, thinking it may break some existing ATM configs. Maybe a downgrade+Modrinthication will be possible, after all - I don't know; this needs testing.
	- Immersive Weathering; anything Valkyrien Skies: not available past 1.20.1 :<
	- WilderWild: Fabric only; dependency FrozenLib doesn't work with Sinytra Connector
	- Serillum's Areas: *it's just plainly kinda-ass*, so I wasn't interested in making it work with LibVilNam, and as such we decided against it (it'd be weird to have only Areas' village name-gen incompatible with the rest, and installing Areas without village names would be stupid because noone would even notice, probably). Maybe I'll make a custom sign-based area mod, and have it work with LibVilNam for in-village signs, and then maybe also have it work with Xaero (as a sort-of social-waypoints system, which was sorely lacking after our migration from Journey Map to Xaero)
	- Voxy: There *is*, apparently, a way to have it work on MP with Chunky. But it's allegedly a bit complicated and I haven't watched the tutorial yet. Also, same concerns as below.
	- 3D textures of various kinds; BetterLeaves: better leave it out (pun intended) for performance considerations. Once we go into beta and client perf *maybe?* improves from not having to run a server, we may decide to allocate some FPS budget for it.
	- Chlorine: Does stuff that we already have other Sodium stuff for

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
\[TBD]

## Configs
\[TBD]

## Guides
read the main readme and you are probably fine

## Credits/Licensing
\[TBD]