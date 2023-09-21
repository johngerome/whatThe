export function whatThe() {
  const f: string[] = [
    "banana",
    "gibberish",
    "gobbledygook",
    "balderdash",
    "hocus pocus",
    "mumbo jumbo",
    "gibberish",
    "noodle soup",
    "brouhaha",
    "gibber-jabber",
    "wacky tacky",
    "razzle dazzle",
    "flibbertigibbet",
    "hokey pokey",
    "boondoggle",
    "hullabaloo",
    "ballyhoo",
    "jibber-jabber",
    "flapdoodle",
    "wackadoo",
    "cringe-fest",
    "absurdity",
    "shenanigans",
    "poppycock",
    "gobbledydoo",
    "hokum pokum"
  ];

  const ending: string = f[Math.floor(Math.random() * f.length)];
  return `What the ${ending}?`;
}
