window.onload = () => {
  document.title = "MODDED BY M3RFR3T";

  const content = [
    "MODDED BY M3RFR3T",
    "𝗠𝗢𝗗𝗗𝗘𝗗 𝗕𝗬 𝗠𝟯𝗥𝗙𝗥𝟯𝗧",
    "𝑀𝒪𝒟𝒟𝐸𝒟 𝐵𝒴 𝑀𝟥𝑅𝐹𝑅𝟥𝒯",
    "𝕄𝕆𝔻𝔻𝔼𝔻 𝔹𝕐 𝕄𝟛ℝ𝔽ℝ𝟛𝕋",
    "𝓜𝓞𝓓𝓓𝓔𝓓 𝓑𝓨 𝓜3𝓡𝓕𝓡3𝓣",
  ];

  setInterval(() => {
    document.title = content[Math.floor(Math.random() * 5)];
  }, 650);
};
