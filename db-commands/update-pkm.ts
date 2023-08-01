import dotenv from "dotenv"
import { connect } from "mongoose"
import BotV2 from "../app/models/mongo-models/bot-v2"
import { logger } from "../app/utils/logger"
import { Pkm } from "../app/types/enum/Pokemon"

export const OldPkm: { [key in Pkm]: string } = {
  DEFAULT: "",
  EGG: "Egg",
  DITTO: "ditto",
  BULBASAUR: "bulbasaur",
  IVYSAUR: "ivysaur",
  VENUSAUR: "venusaur",
  CHARMANDER: "charmander",
  CHARMELEON: "charmeleon",
  CHARIZARD: "charizard",
  SQUIRTLE: "squirtle",
  WARTORTLE: "wartortle",
  BLASTOISE: "blastoise",
  GEODUDE: "geodude",
  GRAVELER: "graveler",
  GOLEM: "golem",
  AZURILL: "azurill",
  MARILL: "marill",
  AZUMARILL: "azumarill",
  ZUBAT: "zubat",
  GOLBAT: "golbat",
  CROBAT: "crobat",
  MAREEP: "mareep",
  FLAFFY: "flaffy",
  AMPHAROS: "ampharos",
  CLEFFA: "cleffa",
  CLEFAIRY: "clefairy",
  CLEFABLE: "clefable",
  IGGLYBUFF: "igglybuff",
  WIGGLYTUFF: "wygglytuff",
  JIGGLYPUFF: "jigglypuff",
  CATERPIE: "caterpie",
  METAPOD: "metapod",
  BUTTERFREE: "butterfree",
  WEEDLE: "weedle",
  KAKUNA: "kakuna",
  BEEDRILL: "beedrill",
  PIDGEY: "pidgey",
  PIDGEOTTO: "pidgeotto",
  PIDGEOT: "pidgeot",
  HOPPIP: "hoppip",
  SKIPLOOM: "skiploom",
  JUMPLUFF: "jumpluff",
  SEEDOT: "seedot",
  NUZLEAF: "nuzleaf",
  SHIFTRY: "shiftry",
  STARLY: "starly",
  STARAVIA: "staravia",
  STARAPTOR: "staraptor",
  CHIKORITA: "chikorita",
  BAYLEEF: "bayleef",
  MEGANIUM: "meganium",
  CYNDAQUIL: "cyndaquil",
  QUILAVA: "quilava",
  TYPHLOSION: "typlosion",
  TOTODILE: "totodile",
  CROCONAW: "croconaw",
  FERALIGATR: "feraligatr",
  TREECKO: "treecko",
  GROVYLE: "grovyle",
  SCEPTILE: "sceptile",
  TORCHIC: "torchic",
  COMBUSKEN: "combusken",
  BLAZIKEN: "blaziken",
  MUDKIP: "mudkip",
  MARSHTOMP: "marshtomp",
  SWAMPERT: "swampert",
  TURTWIG: "turtwig",
  GROTLE: "grotle",
  TORTERRA: "torterra",
  CHIMCHAR: "chimchar",
  MONFERNO: "monferno",
  INFERNAPE: "infernape",
  PIPLUP: "piplup",
  PRINPLUP: "prinplup",
  EMPOLEON: "empoleon",
  NIDORANF: "nidoranF",
  NIDORINA: "nidorina",
  NIDOQUEEN: "nidoqueen",
  NIDORANM: "nidoranM",
  NIDORINO: "nidorino",
  NIDOKING: "nidoking",
  PICHU: "pichu",
  PIKACHU: "pikachu",
  RAICHU: "raichu",
  MACHOP: "machop",
  MACHOKE: "machoke",
  MACHAMP: "machamp",
  HORSEA: "horsea",
  SEADRA: "seadra",
  KINGDRA: "kingdra",
  TRAPINCH: "trapinch",
  VIBRAVA: "vibrava",
  FLYGON: "flygon",
  SPHEAL: "spheal",
  SEALEO: "sealeo",
  WALREIN: "walrein",
  ARON: "aron",
  LAIRON: "lairon",
  AGGRON: "aggron",
  MAGNEMITE: "magnemite",
  MAGNETON: "magneton",
  MAGNEZONE: "magnezone",
  RHYHORN: "rhyhorn",
  RHYDON: "rhydon",
  RHYPERIOR: "rhyperior",
  TOGEPI: "togepi",
  TOGETIC: "togetic",
  TOGEKISS: "togekiss",
  DUSKULL: "duskull",
  DUSCLOPS: "dusclops",
  DUSKNOIR: "dusknoir",
  LOTAD: "lotad",
  LOMBRE: "lombre",
  LUDICOLO: "ludicolo",
  SHINX: "shinx",
  LUXIO: "luxio",
  LUXRAY: "luxray",
  POLIWAG: "poliwag",
  POLIWHIRL: "poliwhirl",
  POLITOED: "politoed",
  POLIWRATH: "poliwrath",
  ABRA: "abra",
  KADABRA: "kadabra",
  ALAKAZAM: "alakazam",
  GASTLY: "gastly",
  HAUNTER: "haunter",
  GENGAR: "gengar",
  DRATINI: "dratini",
  DRAGONAIR: "dragonair",
  DRAGONITE: "dragonite",
  LARVITAR: "larvitar",
  PUPITAR: "pupitar",
  TYRANITAR: "tyranitar",
  SLAKOTH: "slakoth",
  VIGOROTH: "vigoroth",
  SLAKING: "slaking",
  RALTS: "ralts",
  KIRLIA: "kirlia",
  GARDEVOIR: "gardevoir",
  BAGON: "bagon",
  SHELGON: "shelgon",
  SALAMENCE: "salamence",
  BELDUM: "beldum",
  METANG: "metang",
  METAGROSS: "metagross",
  GIBLE: "gible",
  GABITE: "gabite",
  GARCHOMP: "garchomp",
  ELEKID: "elekid",
  ELECTABUZZ: "electabuzz",
  ELECTIVIRE: "electivire",
  MAGBY: "magby",
  MAGMAR: "magmar",
  MAGMORTAR: "magmortar",
  MUNCHLAX: "munchlax",
  SNORLAX: "snorlax",
  GROWLITHE: "growlithe",
  ARCANINE: "arcanine",
  ONIX: "onix",
  STEELIX: "steelix",
  MEGA_STEELIX: "mega-steelix",
  SCYTHER: "scyther",
  SCIZOR: "scizor",
  MEGA_SCIZOR: "mega-scizor",
  RIOLU: "riolu",
  LUCARIO: "lucario",
  MEGA_LUCARIO: "mega-lucario",
  MAGIKARP: "magikarp",
  RATTATA: "rattata",
  RATICATE: "raticate",
  SPEAROW: "spearow",
  FEAROW: "fearow",
  GYARADOS: "gyarados",
  LUGIA: "lugia",
  GIRATINA: "giratina",
  ZAPDOS: "zapdos",
  MOLTRES: "moltres",
  ARTICUNO: "articuno",
  DIALGA: "dialga",
  PALKIA: "palkia",
  SUICUNE: "suicune",
  RAIKOU: "raikou",
  ENTEI: "entei",
  REGICE: "regice",
  REGIROCK: "regirock",
  REGISTEEL: "registeel",
  KYOGRE: "kyogre",
  GROUDON: "groudon",
  RAYQUAZA: "rayquaza",
  REGIGIGAS: "regigigas",
  EEVEE: "eevee",
  VAPOREON: "vaporeon",
  JOLTEON: "jolteon",
  FLAREON: "flareon",
  ESPEON: "espeon",
  UMBREON: "umbreon",
  LEAFEON: "leafeon",
  SYLVEON: "sylveon",
  MEDITITE: "meditite",
  MEDICHAM: "medicham",
  MEGA_MEDICHAM: "mega-medicham",
  NUMEL: "numel",
  CAMERUPT: "camerupt",
  MEGA_CAMERUPT: "mega-camerupt",
  DARKRAI: "darkrai",
  LITWICK: "litwick",
  LAMPENT: "lampent",
  CHANDELURE: "chandelure",
  SLOWPOKE: "slowpoke",
  SLOWBRO: "slowbro",
  SLOWKING: "slowking",
  BELLSPROUT: "bellsprout",
  WEEPINBELL: "weepinbell",
  VICTREEBEL: "victreebel",
  SWINUB: "swinub",
  PILOSWINE: "piloswine",
  MAMOSWINE: "mamoswine",
  SNORUNT: "snorunt",
  GLALIE: "glalie",
  FROSLASS: "froslass",
  SNOVER: "snover",
  ABOMASNOW: "abomasnow",
  MEGA_ABOMASNOW: "mega-abomasnow",
  VANILLITE: "vanillite",
  VANILLISH: "vanillish",
  VANILLUXE: "vanilluxe",
  GLACEON: "glaceon",
  VOLCARONA: "volcarona",
  LANDORUS: "landorus",
  THUNDURUS: "thundurus",
  TORNADUS: "tornadus",
  KELDEO: "keldeo",
  TERRAKION: "terrakion",
  VIRIZION: "virizion",
  COBALION: "cobalion",
  MANAPHY: "manaphy",
  ROTOM: "rotom",
  SPIRITOMB: "spiritomb",
  ABSOL: "absol",
  LAPRAS: "lapras",
  LATIAS: "latias",
  LATIOS: "latios",
  MESPRIT: "mesprit",
  AZELF: "azelf",
  UXIE: "uxie",
  MEWTWO: "mewtwo",
  KYUREM: "kyurem",
  RESHIRAM: "reshiram",
  ZEKROM: "zekrom",
  CELEBI: "celebi",
  VICTINI: "victini",
  JIRACHI: "jirachi",
  ARCEUS: "arceus",
  DEOXYS: "deoxys",
  SHAYMIN: "shaymin",
  CRESSELIA: "cresselia",
  HEATRAN: "heatran",
  HO_OH: "ho-Oh",
  AERODACTYL: "aerodactyl",
  PRIMAL_KYOGRE: "primal-Kyogre",
  PRIMAL_GROUDON: "primal-Groudon",
  MEOWTH: "meowth",
  PERSIAN: "persian",
  DEINO: "deino",
  ZWEILOUS: "zweilous",
  HYDREIGON: "hydreigon",
  SANDILE: "sandile",
  KROKOROK: "krokorok",
  KROOKODILE: "krookodile",
  SOLOSIS: "solosis",
  DUOSION: "duosion",
  REUNICLUS: "reuniclus",
  MEGA_RAYQUAZA: "mega-Rayquaza",
  SWABLU: "swablu",
  ODDISH: "oddish",
  GLOOM: "gloom",
  VILEPLUME: "vileplume",
  BELLOSSOM: "bellossom",
  AMAURA: "amaura",
  AURORUS: "aurorus",
  ANORITH: "anorith",
  ARMALDO: "armaldo",
  ARCHEN: "archen",
  ARCHEOPS: "archeops",
  SHIELDON: "shieldon",
  BASTIODON: "bastiodon",
  TIRTOUGA: "tirtouga",
  CARRACOSTA: "carracosta",
  LILEEP: "lileep",
  CRADILY: "cradily",
  CRANIDOS: "cranidos",
  RAMPARDOS: "rampardos",
  KABUTO: "kabuto",
  KABUTOPS: "kabutops",
  OMANYTE: "omanyte",
  OMASTAR: "omastar",
  TYRUNT: "tyrunt",
  TYRANTRUM: "tyrantrum",
  BUDEW: "budew",
  ROSELIA: "roselia",
  ROSERADE: "roserade",
  BUNEARY: "buneary",
  LOPUNNY: "lopunny",
  MEGA_LOPUNNY: "mega-lopunny",
  AXEW: "axew",
  FRAXURE: "fraxure",
  HAXORUS: "haxorus",
  VENIPEDE: "venipede",
  WHIRLIPEDE: "whirlipede",
  SCOLIPEDE: "scolipede",
  PORYGON: "porygon",
  PORYGON_2: "porygon2",
  PORYGON_Z: "porygon-z",
  ELECTRIKE: "electrike",
  MANECTRIC: "manectric",
  MEGA_MANECTRIC: "mega-manectric",
  SHUPPET: "shuppet",
  BANETTE: "banette",
  MEGA_BANETTE: "mega-banette",
  HONEDGE: "honedge",
  DOUBLADE: "doublade",
  AEGISLASH: "aegislash",
  CUBONE: "cubone",
  MAROWAK: "marowak",
  ALOLAN_MAROWAK: "alolan-marowak",
  WHISMUR: "whismur",
  LOUDRED: "loudred",
  EXPLOUD: "exploud",
  TYMPOLE: "tympole",
  PALPITOAD: "palpitoad",
  SEISMITOAD: "seismitoad",
  SEWADDLE: "sewaddle",
  SWADLOON: "swadloon",
  LEAVANNY: "leavanny",
  PIKIPEK: "pikipek",
  TRUMBEAK: "trumbeak",
  TOUCANNON: "toucannon",
  FLABEBE: "flabebe",
  FLOETTE: "floette",
  FLORGES: "florges",
  JANGMO_O: "jangmo-o",
  HAKAMO_O: "hakamo-o",
  KOMMO_O: "kommo-o",
  MELOETTA: "meloetta",
  ALTARIA: "altaria",
  MEGA_ALTARIA: "mega-altaria",
  CASTFORM: "castform",
  CASTFORM_SUN: "castform-sun",
  CASTFORM_RAIN: "castform-rain",
  CASTFORM_HAIL: "castform-hail",
  CORPHISH: "corphish",
  CRAWDAUNT: "crawdaunt",
  JOLTIK: "joltik",
  GALVANTULA: "galvantula",
  GENESECT: "genesect",
  RELICANTH: "relicanth",
  HATENNA: "hatenna",
  HATTREM: "hattrem",
  HATTERENE: "hatterene",
  FENNEKIN: "fennekin",
  BRAIXEN: "braixen",
  DELPHOX: "delphox",
  MAKUHITA: "makuhita",
  HARIYAMA: "hariyama",
  REGIELEKI: "regieleki",
  REGIDRAGO: "regidrago",
  GUZZLORD: "guzzlord",
  ETERNATUS: "eternatus",
  PONYTA: "ponyta",
  RAPIDASH: "rapidash",
  NINCADA: "nincada",
  NINJASK: "ninjask",
  SHEDNINJA: "shedninja",
  NOIBAT: "noibat",
  NOIVERN: "noivern",
  PUMPKABOO: "pumpkaboo",
  GOURGEIST: "gourgeist",
  CACNEA: "cacnea",
  CACTURNE: "cacturne",
  TAUROS: "tauros",
  HAPPINY: "happiny",
  CHANSEY: "chansey",
  BLISSEY: "blissey",
  TAPU_KOKO: "tapu-koko",
  TAPU_LELE: "tapu-lele",
  STAKATAKA: "stakataka",
  BLACEPHALON: "blacephalon",
  HOUNDOUR: "houndour",
  HOUNDOOM: "houndoom",
  MEGA_HOUNDOOM: "mega-houndoom",
  CLAMPERL: "clamperl",
  HUNTAIL: "huntail",
  GOREBYSS: "gorebyss",
  SMOOCHUM: "smoochum",
  JYNX: "jynx",
  SALANDIT: "salandit",
  SALAZZLE: "salazzle",
  VENONAT: "venonat",
  VENOMOTH: "venomoth",
  VOLTORB: "voltorb",
  ELECTRODE: "electrode",
  SLUGMA: "slugma",
  MAGCARGO: "magcargo",
  SNEASEL: "sneasel",
  WEAVILE: "weavile",
  CROAGUNK: "croagunk",
  TOXICROAK: "toxicroak",
  CHINCHOU: "chinchou",
  LANTURN: "lanturn",
  POOCHYENA: "poochyena",
  MIGHTYENA: "mightyena",
  BRONZOR: "bronzor",
  BRONZONG: "bronzong",
  DRIFLOON: "drifloon",
  DRIFBLIM: "drifblim",
  SHROOMISH: "shroomish",
  BRELOOM: "breloom",
  TENTACOOL: "tentacool",
  TENTACRUEL: "tentacruel",
  SNUBULL: "snubull",
  GRANBULL: "granbull",
  SEVIPER: "seviper",
  VULPIX: "vulpix",
  NINETALES: "ninetales",
  ALOLAN_VULPIX: "alolan-vulpix",
  ALOLAN_NINETALES: "alolan-ninetales",
  BUIZEL: "buizel",
  FLOATZEL: "floatzel",
  MAWILE: "mawile",
  KECLEON: "kecleon",
  CARBINK: "carbink",
  DIANCIE: "diancie",
  CHATOT: "chatot",
  GOOMY: "goomy",
  SLIGOO: "sligoo",
  GOODRA: "goodra",
  MEW: "mew",
  BOUNSWEET: "bounsweet",
  STEENEE: "steenee",
  TSAREENA: "tsareena",
  VOLCANION: "volcanion",
  APPLIN: "applin",
  APPLETUN: "appletun",
  OSHAWOTT: "oshawott",
  DEWOTT: "dewott",
  SAMUROTT: "samurott",
  SNOM: "snom",
  FROSMOTH: "frosmoth",
  WAILMER: "wailmer",
  WAILORD: "wailord",
  DREEPY: "dreepy",
  DRAKLOAK: "drakloak",
  DRAGAPULT: "dragapult",
  SNIVY: "snivy",
  SERVINE: "servine",
  SERPERIOR: "serperior",
  SCORBUNNY: "scorbunny",
  RABOOT: "raboot",
  CINDERACE: "cinderace",
  POPPLIO: "popplio",
  BRIONNE: "brionne",
  PRIMARINA: "primarina",
  GOTHITA: "gothita",
  GOTHORITA: "gothorita",
  GOTHITELLE: "gothitelle",
  SANDSHREW: "sandshrew",
  SANDSLASH: "sandslash",
  FARFETCH_D: "farfetch-d",
  UNOWN_A: "unown-a",
  UNOWN_B: "unown-b",
  UNOWN_C: "unown-c",
  UNOWN_D: "unown-d",
  UNOWN_E: "unown-e",
  UNOWN_F: "unown-f",
  UNOWN_G: "unown-g",
  UNOWN_H: "unown-h",
  UNOWN_I: "unown-i",
  UNOWN_J: "unown-j",
  UNOWN_K: "unown-k",
  UNOWN_L: "unown-l",
  UNOWN_M: "unown-m",
  UNOWN_N: "unown-n",
  UNOWN_O: "unown-o",
  UNOWN_P: "unown-p",
  UNOWN_Q: "unown-q",
  UNOWN_R: "unown-r",
  UNOWN_S: "unown-s",
  UNOWN_T: "unown-t",
  UNOWN_U: "unown-u",
  UNOWN_V: "unown-v",
  UNOWN_W: "unown-w",
  UNOWN_X: "unown-x",
  UNOWN_Y: "unown-y",
  UNOWN_Z: "unown-z",
  UNOWN_QUESTION: "unown-question",
  UNOWN_EXCLAMATION: "unown-exclamation",
  TAPU_FINI: "tapu-fini",
  TAPU_BULU: "tapu-bulu",
  DIGLETT: "diglett",
  DUGTRIO: "dugtrio",
  ROWLET: "rowlet",
  DARTIX: "dartix",
  DECIDUEYE: "decidueye",
  ZORUA: "zorua",
  ZOROARK: "zoroark",
  HISUI_ZORUA: "hisui-zorua",
  HISUI_ZOROARK: "hisui-zoroark",
  FROAKIE: "froakie",
  FROGADIER: "frogadier",
  GRENINJA: "greninja",
  TYROGUE: "tyrogue",
  HITMONLEE: "hitmonlee",
  HITMONCHAN: "hitmonchan",
  HITMONTOP: "hitmontop",
  MIMIKYU: "mimikyu",
  GRIMER: "grimer",
  MUK: "muk",
  ALOLAN_GRIMER: "alolan-grimer",
  ALOLAN_MUK: "alolan_muk",
  CARVANHA: "carvanha",
  SHARPEDO: "sharpedo",
  PINECO: "pineco",
  FORRETRESS: "forretress",
  SEEL: "seel",
  DEWGONG: "dewgong",
  ALOLAN_GEODUDE: "alolan-geodude",
  ALOLAN_GRAVELER: "alolan-graveler",
  ALOLAN_GOLEM: "alolan-golem",
  EKANS: "ekans",
  ARBOK: "arbok",
  MIME_JR: "mime-jr",
  MR_MIME: "mr-mime",
  ORIGIN_GIRATINA: "origin-giratina",
  PIROUETTE_MELOETTA: "pirouette-meloetta",
  MELMETAL: "melmetal",
  HOOPA: "hoopa",
  HOOPA_UNBOUND: "hoopa_unbound",
  SILVALLY: "silvally",
  TYPE_NULL: "type_null",
  ZERAORA: "zeraora",
  XERNEAS: "xerneas",
  YVELTAL: "yveltal",
  MARSHADOW: "marshadow",
  HOOTHOOT: "hoothoot",
  NOCTOWL: "noctowl",
  BONSLEY: "bonsley",
  SUDOWOODO: "sudowoodo",
  PHIONE: "phione",
  COMBEE: "combee",
  VESPIQUEEN: "vespiqueen",
  SHUCKLE: "shuckle",
  TEPIG: "tepig",
  PIGNITE: "pignite",
  EMBOAR: "emboar",
  WYNAUT: "wynaut",
  WOBBUFFET: "Wobbuffet",
  LUNATONE: "lunatone",
  SOLROCK: "solrock",
  SHAYMIN_SKY: "shaymin-sky",
  WURMPLE: "wurmple",
  SILCOON: "silcoon",
  BEAUTIFLY: "beautifly",
  CASCOON: "cascoon",
  DUSTOX: "dustox",
  TINKATINK: "tinkatink",
  TINKATUFF: "tinkatuff",
  TINKATON: "tinkaton",
  PARAS: "paras",
  PARASECT: "parasect",
  MILTANK: "miltank",
  MANKEY: "mankey",
  PRIMEAPE: "primeape",
  SUNKERN: "sunkern",
  SUNFLORA: "sunflora",
  MARACTUS: "maractus",
  MINUN: "minun",
  PLUSLE: "plusle",
  PINSIR: "pinsir",
  NATU: "natu",
  XATU: "xatu"
}

async function main() {
  dotenv.config()

  try {
    logger.info("connect to db ...")
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const db = await connect(process.env.MONGO_URI!)
    const bots = await BotV2.find()
    for (let i = 0; i < bots.length; i++) {
      let modified = false
      const bot = bots[i]
      console.log(bot.name)
      const botName = replaceWithNewName(bot.name)
      console.log(botName)
      if (botName) {
        bot.name = botName
        modified = true
      }
      bot.steps.forEach((step) => {
        step.board.forEach((p) => {
          const name = replaceWithNewName(p.name)
          if (name) {
            p.name = name as Pkm
            modified = true
          }
        })
      })
      if (modified) {
        bot.markModified("steps")
        await bot.save()
      }
    }
    await db.disconnect()
  } catch (e) {
    logger.error("Parsing error:", e)
  }
}

main()

function replaceWithNewName(name: string) {
  if (Object.values(Pkm).includes(name as Pkm)) {
    return undefined
  } else {
    const oldPkmIndex = Object.values(OldPkm).findIndex((pkm) => name === pkm)
    if (oldPkmIndex !== -1) {
      const newPkmName = Object.keys(OldPkm)[oldPkmIndex]
      console.log("replacing", name, " with ", newPkmName)
      return newPkmName as Pkm
    } else {
      console.log("error with", name)
      return undefined
    }
  }
}
