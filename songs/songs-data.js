// youtubeIdをキーにして、ファンの選曲と楽曲情報を紐づけ
const songs = [
  // { title: "曲名", artist: "アーティスト名", youtubeId: "YouTube動画ID" },
  { title: "BIRTH", artist: "Anthos", youtubeId: "-PTnAtnlZdw" },
  { title: "Unknown", artist: "Anthos", youtubeId: "w14Qlxk7IPY" },
  { title: "Juliet", artist: "Anthos", youtubeId: "ZjJlw7olLQE" },
  { title: "Stay Away", artist: "Anthos", youtubeId: "Kjdout0YIxk" },
  { title: "S.T.O.P", artist: "Anthos", youtubeId: "3fV51GR6_F0" },
  { title: "ChangeYourWorld", artist: "Anthos", youtubeId: "b4y49YQajCg" },
  { title: "Me Against Myself", artist: "Anthos", youtubeId: "Sj5e4AsHkdM" },
  { title: "Silent Message", artist: "Anthos", youtubeId: "a0t23xNWsyE" },
  { title: "I Know Who I Am", artist: "Anthos", youtubeId: "xJ4jPZ2p8KI" },
  { title: "Antholic", artist: "Anthos", youtubeId: "Nh5oofndQak" },
  { title: "Pain In My Heart", artist: "灯堂理人", youtubeId: "nslhlCZHUnY" },
  { title: "Breathe", artist: "如月薫", youtubeId: "Bb8Rr3XHWEk" },
  { title: "The Days", artist: "影河凌駕", youtubeId: "-kFlznZRclE" },
  { title: "Persona", artist: "チセ", youtubeId: "BLu8DZErIdk" },
  { title: "太陽が眠ってる時間に", artist: "清瀬陽汰", youtubeId: "kaORowPaGC4" },
  { title: "Tycoon", artist: "結城眞紘", youtubeId: "blHSjAwp9AY" },
  { title: "Might be", artist: "八代刹那", youtubeId: "rynkRlsvfpA" },
  { title: "Flash Point", artist: "Anthos*", youtubeId: "4kez84fX0Dc" },
  { title: "Shine On", artist: "Anthos*", youtubeId: "HrBuhdn5V30" }, //何故かリンク先で再生ができない模様
  { title: "Lay it down", artist: "Anthos*", youtubeId: "Hwhl5QJHLCQ" },
  { title: "Paradiso", artist: "Anthos*", youtubeId: "MYetm1pE3FA" },
  { title: "Infraction", artist: "Anthos*", youtubeId: "xKLoLn7e2os" },
  { title: "Umbilical Lover", artist: "Anthos*", youtubeId: "NrSMfZJ2Tvc" },
  { title: "The Place of Fate", artist: "Anthos*", youtubeId: "AMYJAFFqvXo" },
  { title: "LOVE IS…", artist: "八代刹那・灯堂理人・如月薫", youtubeId: "qFcSAoYgPEA" },
  { title: "JAYWALK", artist: "チセ・清瀬陽汰", youtubeId: "GnfT4U0XvMI" },
  { title: "STAY", artist: "影河凌駕・結城眞紘", youtubeId: "dsrpKjOyyXM" },
  { title: "TELL", artist: "Anthos*", youtubeId: "I1TcjmJxmQ8" },
  { title: "Mirage in Mirage", artist: "Anthos*", youtubeId: "gAG-ZPqmsu0" },
  { title: "Fake Veil", artist: "Anthos*", youtubeId: "djnEPkBZtII" },
  { title: "Regret", artist: "Anthos*", youtubeId: "T_0CxQHMUyI" },
  { title: "R.N.P.N", artist: "Anthos*", youtubeId: "M035fYs8usU" },
  { title: "The Other Side", artist: "Anthos*", youtubeId: "PA-DOTUHsWU" },
  { title: "Liberation", artist: "Anthos*", youtubeId: "KlVMrSuny4A" },
  { title: "Clap! Clap! Clap!", artist: "Anthos*", youtubeId: "msWYGO6IdfQ" },
  { title: "Spectac1e", artist: "Anthos*", youtubeId: "QLYT9V1Tzm8" },
  { title: "Raughing laughing", artist: "Anthos*", youtubeId: "b92VyDz5LJ0" },
  { title: "Imitation Flower", artist: "如月薫", youtubeId: "8fmSie9atTM" },
  { title: "Girl, it's you", artist: "如月薫", youtubeId: "ibjZ9Jfigf0" },
  { title: "Core", artist: "清瀬陽汰", youtubeId: "O0tIF2yP4zc" },
  { title: "Favorite Playlist", artist: "清瀬陽汰", youtubeId: "owarC6jgtoM" },
  { title: "Lotus and Venus", artist: "灯堂理人", youtubeId: "WelnVplCj60" },
  { title: "一方恋", artist: "灯堂理人", youtubeId: "i9l2uMoAwx4" },
  { title: "Diremption", artist: "チセ", youtubeId: "URkIdBAtYns" },
  { title: "Diamond", artist: "チセ", youtubeId: "Xr0LAOQkgZo" },
  { title: "City Lights", artist: "八代刹那", youtubeId: "-vieEC4B8rI" },
  { title: "Something in the air", artist: "八代刹那", youtubeId: "VlviMhQBXFA" },
  { title: "ANTI MY HERO", artist: "結城眞紘", youtubeId: "RDr5eZsEWTg" },
  { title: "RED Toxic", artist: "結城眞紘", youtubeId: "3hpAn1i2KCw" },
  { title: "Signalized, signalized", artist: "影河凌駕", youtubeId: "uVwVhq7z_lY" },
  { title: "My CAMERA", artist: "影河凌駕", youtubeId: "7la3MLVHfD0" },
  { title: "Q.E.D.", artist: "Anthos*", youtubeId: "SjuMMSAV-GE" },
  { title: "No Drama", artist: "Anthos*", youtubeId: "EBci9liY-88" },
  { title: "Anthocarpous", artist: "Anthos*", youtubeId: "jk-dZwl8GPw" },
  { title: "by night", artist: "Anthos*", youtubeId: "cJ9kZ8cFavM" },
  { title: "Endless Howl", artist: "Anthos*", youtubeId: "nbXdJEDR0ag" },
  { title: "Past", artist: "Anthos*", youtubeId: "QB8KDwQ2Q_0" },
  { title: "Cartain Call", artist: "Anthos*", youtubeId: "VZfHv2AlGOg" },
  { title: "Wilting", artist: "Anthos*", youtubeId: "9HG-p55ZtjE" },
  { title: "Answer.", artist: "Anthos*", youtubeId: "bKqqCa7WVt4" },
  { title: "Swan song", artist: "Anthos*", youtubeId: "kgPtrhIS9uw" },
  { title: "Empty Dream", artist: "Loulou*di", youtubeId: "Sgy_Lp6YYoM" },
  { title: "Addictive Whispering", artist: "Loulou*di", youtubeId: "VqPxNM47qLA" },
  { title: "Final Direction", artist: "Loulou*di", youtubeId: "yillf_F1L_8" },
  { title: "Butterfly Knife", artist: "Loulou*di", youtubeId: "iDcplicLo54" },
  { title: "Immortal Tale", artist: "Loulou*di", youtubeId: "inBQejmHRlQ" },
  { title: "Black Pulse", artist: "Loulou*di", youtubeId: "WHmPRSCGLtE" },
  { title: "Perfect Pride", artist: "Loulou*di", youtubeId: "EhvC4Hq9syM" },
  { title: "Abortive Flower", artist: "Loulou*di", youtubeId: "c_snae826g4" },
  { title: "Hopeless Ark", artist: "Loulou*di", youtubeId: "dzEff8xmxGE" },
  { title: "Dying Matter", artist: "Loulou*di", youtubeId: "oWE3IznUI3s" },
  { title: "Dead Sea Note", artist: "Loulou*di", youtubeId: "f8_-1XsZYBk" },
  { title: "Growing Nightmare", artist: "Loulou*di", youtubeId: "GUHHsYN-Axo" },
  { title: "Invisible Cross", artist: "Loulou*di", youtubeId: "MAEJ5PgZzyQ" },
  { title: "Another Liar", artist: "Loulou*di", youtubeId: "ZfcS7PYGdvM" },
  { title: "Bioagent", artist: "烏麻亜蝶", youtubeId: "0RFY52K-7Mc" },
  { title: "Above The Sky", artist: "Loulou*di", youtubeId: "Rf8Pgh6g4R8" },
  { title: "Dream Eden", artist: "Loulou*di", youtubeId: "b8WdPjgUXEU" },
  { title: "Fall leaves after leaves fall", artist: "Anthos", youtubeId: "0_aNYEZNp_k" },
  { title: "Clockwork Flowers", artist: "Anthos", youtubeId: "kCFvoYIJlYQ" },
];

// 1人分を1セットとして登録。songIdsにはsongs内のyoutubeIdを指定する。
const fanSelections = [
  // { fan: "アルファベット順番に", songIds: ["YouTube動画ID1", "YouTube動画ID2"] },
  { fan: "muraki",
    songIds: [
      "a0t23xNWsyE", // Silent Message
      "inBQejmHRlQ", // Immortal Tale
      "bKqqCa7WVt4", // Answer.
      "f8_-1XsZYBk", // Dead Sea Note
      "0_aNYEZNp_k"  // Fall leaves after leaves fall
    ]
  },
  { fan: "A",
    songIds: [
      "ZjJlw7olLQE", // Juliet
      "a0t23xNWsyE", // Silent Message
      "7la3MLVHfD0", // My CAMERA
      "RDr5eZsEWTg", // ANTI MY HERO
      "M035fYs8usU"  // R.N.P.N
    ]
  },
  { fan: "B",
    songIds: [
      "ZjJlw7olLQE", // Juliet
      "T_0CxQHMUyI", // Regret
      "MYetm1pE3FA", // Paradiso
      "Sj5e4AsHkdM", // Me Against Myself
      "3fV51GR6_F0"  // S.T.O.P
    ]
  },
  { fan: "C",
    songIds: [
      "b4y49YQajCg", // ChangeYourWorld
      "Sj5e4AsHkdM", // Me Against Myself
      "msWYGO6IdfQ", // Clap! Clap! Clap!
      "iDcplicLo54", // Butterfly Knife
      "c_snae826g4"  // Abortive Flower
    ]
  },
  { fan: "D",
    songIds: [
      "ZjJlw7olLQE", // Juliet
      "nbXdJEDR0ag", // Endless Howl
      "Sj5e4AsHkdM", // Me Against Myself
      "9HG-p55ZtjE", // Wilting
      "inBQejmHRlQ"  // Immortal Tale
    ]
  },
  { fan: "E",
    songIds: [
      "ZjJlw7olLQE", // Juliet
      "Sj5e4AsHkdM", // Me Against Myself
      "9HG-p55ZtjE", // Wilting
      "VlviMhQBXFA", // Something in the air
      "f8_-1XsZYBk"  // Dead Sea Note
    ]
  },
  { fan: "F",
    songIds: [
      "QB8KDwQ2Q_0", // Past
      "nbXdJEDR0ag", // Endless Howl
      "3fV51GR6_F0", // S.T.O.P.
      "-PTnAtnlZdw", // BIRTH
      "djnEPkBZtII"  // Fake Veil
    ]
  },
  { fan: "G",
    songIds: [
      "ZjJlw7olLQE", // Juliet
      "3fV51GR6_F0", // S.T.O.P.
      "T_0CxQHMUyI", // Regret
      "b92VyDz5LJ0", // Raughing laughing
      "VZfHv2AlGOg"  // Cartain Call
    ]
  },
  { fan: "H",
    songIds: [
      "-PTnAtnlZdw", // BIRTH
      "rynkRlsvfpA", // Might be
      "HrBuhdn5V30", // Shine On（※元リストに再生不可のコメントあり）
      "AMYJAFFqvXo", // The Place of Fate
      "T_0CxQHMUyI"  // Regret
    ]
  },
  { fan: "I",
    songIds: [
      "VqPxNM47qLA", // Addictive Whispering
      "WHmPRSCGLtE", // Black Pulse
      "dzEff8xmxGE", // Hopeless Ark
      "gAG-ZPqmsu0", // Mirage in Mirage
      "T_0CxQHMUyI"  // Regret
    ]
  },
  { fan: "J",
    songIds: [
      "a0t23xNWsyE", // Silent Message
      "nbXdJEDR0ag", // Endless Howl
      "9HG-p55ZtjE", // Wilting
      "yillf_F1L_8", // Final Direction
      "GUHHsYN-Axo"  // Growing Nightmare
    ]
  },
  { fan: "K",
    songIds: [
      "AMYJAFFqvXo", // The Place of Fate
      "-PTnAtnlZdw", // BIRTH
      "dsrpKjOyyXM", // STAY
      "NrSMfZJ2Tvc", // Umbilical Lover
      "RDr5eZsEWTg"  // ANTI MY HERO
    ]
  },
  { fan: "L",
    songIds: [
      "c_snae826g4", // Abortive Flower
      "MAEJ5PgZzyQ", // Invisible Cross
      "yillf_F1L_8", // Final Direction
      "WHmPRSCGLtE", // Black Pulse
      "b8WdPjgUXEU"  // Dream Eden
    ]
  },
  { fan: "M",
    songIds: [
      "dsrpKjOyyXM", // STAY
      "3fV51GR6_F0", // S.T.O.P
      "M035fYs8usU", // R.N.P.N
      "Hwhl5QJHLCQ", // Lay it down
      "xJ4jPZ2p8KI"  // I Know Who I Am
    ]
  },
  { fan: "N",
    songIds: [
      "Rf8Pgh6g4R8", // Above The Sky
      "dsrpKjOyyXM", // STAY
      "AMYJAFFqvXo", // The Place of Fate
      "-kFlznZRclE", // The Days
      "HrBuhdn5V30"  // Shine On（※元リストに再生不可のコメントあり）
    ]
  },
  { fan: "O",
    songIds: [
      "I1TcjmJxmQ8", // TELL
      "Sj5e4AsHkdM", // Me Against Myself
      "9HG-p55ZtjE", // Wilting
      "nbXdJEDR0ag", // Endless Howl
      "8fmSie9atTM"  // Imitation Flower
    ]
  },
  { fan: "P",
    songIds: [
      "4kez84fX0Dc", // Flash Point
      "xKLoLn7e2os", // Infraction
      "a0t23xNWsyE", // Silent Message
      "jk-dZwl8GPw", // Anthocarpous
      "nbXdJEDR0ag"  // Endless Howl
    ]
  },
  { fan: "Q",
    songIds: [
      "gAG-ZPqmsu0", // Mirage in Mirage
      "9HG-p55ZtjE", // Wilting
      "kgPtrhIS9uw", // Swan song
      "b92VyDz5LJ0", // Raughing laughing
      "0_aNYEZNp_k"  // Fall leaves after leaves fall
    ]
  },
  { fan: "R",
    songIds: [
      "b4y49YQajCg", // ChangeYourWorld
      "a0t23xNWsyE", // Silent Message
      "bKqqCa7WVt4", // Answer.
      "MAEJ5PgZzyQ", // Invisible Cross
      "dzEff8xmxGE"  // Hopeless Ark
    ]
  },
];