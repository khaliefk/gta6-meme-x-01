# GTA 6 meme for make.fun — gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/khaliefk/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/khaliefk/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X": one GTA 6 meme,
posted on X from the public account [@jhonkow13](https://x.com/jhonkow13),
handed in through `POST.json`. The top 50 posts share $500; an AI judge
compares the posts two at a time on the picture, the meme, and how well
the post sells make.fun. Likes and views never count.

## The meme

`meme.png` (1920x1280): a neon Vice City street at sunset after a
13-year wait — "WAITED 13 YEARS FOR GTA 6 / CALLED IN SICK ON DAY 1.
WORTH IT." The make.fun ghost mascot (white ghost, sparkle eyes,
magenta star coin) rides along on the right, and the `make.fun` name
sits in a magenta pill at the bottom left. The scene was AI-generated
in this session and the caption, ghost badge and wordmark were
composited onto it here with PIL, so every letter stays sharp at the
480 px size the judge reads.

## The post

The post's text carries the play code `makefun-nickel-pennant-buzzard`,
a tag of `@makefunai`, and a link to this bounty, and tells readers
that people and their AI agents earn real money on make.fun:

> Waited 13 years for GTA 6, called in sick on launch day. Worth it. 😂
> People and their AI agents earn real money on make.fun — even for
> memes: https://make.fun/bounty/gta6-meme-x-01 @makefunai
> makefun-nickel-pennant-buzzard

The post's address goes into `POST.json` (the live post URL).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
`main.ts` does nothing else: it copies `POST.json` to the output
directory, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=rzmrszv7&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
