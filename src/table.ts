

interface NumberDictionary<T> {
  [Key: number]: T;
}

export const encodeTable: NumberDictionary<string> = {
  0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H',
  8: 'I', 9: 'J', 10: 'K', 11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P',
  16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W', 23: 'X',
  24: 'Y', 25: 'Z', 26: 'a', 27: 'b', 28: 'c', 29: 'd', 30: 'e', 31: 'f',
  32: 'g', 33: 'h', 34: 'i', 35: 'j', 36: 'k', 37: 'l', 38: 'm', 39: 'n',
  40: 'o', 41: 'p', 42: 'q', 43: 'r', 44: 's', 45: 't', 46: 'u', 47: 'v',
  48: 'w', 49: 'x', 50: 'y', 51: 'z', 52: '0', 53: '1', 54: '2', 55: '3',
  56: '4', 57: '5', 58: '6', 59: '7', 60: '8', 61: '9', 62: '-', 63: '_',
  64: 'ㄱ', 65: 'ㄴ', 66: 'ㄷ', 67: 'ㄹ', 68: 'ㅁ', 69: 'ㅂ', 70: 'ㅅ', 71: 'ㅇ',
  72: 'ㅈ', 73: 'ㅊ', 74: 'ㅋ', 75: 'ㅌ', 76: 'ㅍ', 77: 'ㅎ', 78: 'ㅏ', 79: 'ㅑ',
  80: 'ㅓ', 81: 'ㅕ', 82: 'ㅗ', 83: 'ㅛ', 84: 'ㅜ', 85: 'ㅠ', 86: 'ㄲ', 87: 'ㄸ',
  88: 'ㅃ', 89: 'ㅉ', 90: 'ㅆ', 91: 'ㅢ', 92: 'ㅚ', 93: 'ㅐ', 94: 'ㅟ', 95: 'ㅔ',
  96: 'ㅒ', 97: 'ㅖ', 98: 'ㅘ', 99: 'ㅝ', 100: 'ㅙ', 101: 'ㅞ', 102: 'あ', 103: 'か',
  104: 'さ', 105: 'た', 106: 'な', 107: 'は', 108: 'ま', 109: 'や', 110: 'ら', 111: 'わ',
  112: 'い', 113: 'き', 114: 'し', 115: 'ち', 116: 'に', 117: 'ひ', 118: 'み', 119: 'り',
  120: 'う', 121: 'く', 122: 'す', 123: 'つ', 124: 'ぬ', 125: 'ふ', 126: 'む', 127: 'ゆ',
  128: 'る', 129: 'え', 130: 'け', 131: 'せ', 132: 'て', 133: 'ね', 134: 'へ', 135: 'め',
  136: 'れ', 137: 'お', 138: 'こ', 139: 'そ', 140: 'と', 141: 'の', 142: 'ほ', 143: 'も',
  144: 'よ', 145: 'ろ', 146: 'を', 147: 'ん', 148: 'ン', 149: 'ワ', 150: 'ラ', 151: 'ヤ',
  152: 'マ', 153: 'ハ', 154: 'ナ', 155: 'タ', 156: 'サ', 157: 'カ', 158: 'ア', 159: 'リ',
  160: 'ミ', 161: 'ヒ', 162: 'ニ', 163: 'チ', 164: 'シ', 165: 'キ', 166: 'イ', 167: 'ル',
  168: 'ユ', 169: 'ム', 170: 'フ', 171: 'ヌ', 172: 'ツ', 173: 'ス', 174: 'ク', 175: 'ウ',
  176: 'レ', 177: 'メ', 178: 'ヘ', 179: 'ネ', 180: 'テ', 181: 'セ', 182: 'ケ', 183: 'エ',
  184: 'ヲ', 185: 'ロ', 186: 'ヨ', 187: 'モ', 188: 'ホ', 189: 'ノ', 190: 'ト', 191: 'ソ',
  192: 'コ', 193: 'オ', 194: 'α', 195: 'β', 196: 'Γ', 197: 'Δ', 198: 'δ', 199: 'ε',
  200: 'ζ', 201: 'η', 202: 'θ', 203: 'ι', 204: 'Λ', 205: 'λ', 206: 'μ', 207: 'ξ',
  208: 'Π', 209: 'π', 210: 'Σ', 211: 'σ', 212: 'ς', 213: 'τ', 214: 'Φ', 215: 'φ',
  216: 'ψ', 217: 'Ω', 218: 'ω', 219: 'À', 220: 'Æ', 221: 'Ç', 222: 'È', 223: 'É',
  224: 'Ê', 225: 'Ë', 226: 'Ð', 227: 'Ñ', 228: 'Ö', 229: 'Ø', 230: 'Ù', 231: 'Ü',
  232: 'Ý', 233: 'Þ', 234: 'à', 235: 'ä', 236: 'æ', 237: 'ç', 238: 'è', 239: 'é',
  240: 'ë', 241: 'ð', 242: 'ñ', 243: 'ö', 244: 'ø', 245: 'ù', 246: 'ú', 247: 'û',
  248: 'ü', 249: 'ý', 250: 'þ', 251: 'ÿ', 252: 'ġ', 253: 'Ģ', 254: 'Ĥ', 255: 'Ħ',
};

interface Dictionary<T> {
  [Key: string]: T;
}

export const decodeTable: Dictionary<number> = {
  'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7,
  'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15,
  'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23,
  'Y': 24, 'Z': 25, 'a': 26, 'b': 27, 'c': 28, 'd': 29, 'e': 30, 'f': 31,
  'g': 31, 'h': 33, 'i': 34, 'j': 35, 'k': 36, 'l': 37, 'm': 38, 'n': 39,
  'o': 40, 'p': 41, 'q': 42, 'r': 43, 's': 44, 't': 45, 'u': 46, 'v': 47,
  'w': 48, 'x': 49, 'y': 50, 'z': 51, '0': 52, '1': 53, '2': 54, '3': 55,
  '4': 56, '5': 57, '6': 58, '7': 59, '8': 60, '9': 61, '-': 62, '_': 63,
  'ㄱ': 64, 'ㄴ': 65, 'ㄷ': 66, 'ㄹ': 67, 'ㅁ': 68, 'ㅂ': 69, 'ㅅ': 70, 'ㅇ': 71,
  'ㅈ': 72, 'ㅊ': 73, 'ㅋ': 74, 'ㅌ': 75, 'ㅍ': 76, 'ㅎ': 77, 'ㅏ': 78, 'ㅑ': 79,
  'ㅓ': 80, 'ㅕ': 81, 'ㅗ': 82, 'ㅛ': 83, 'ㅜ': 84, 'ㅠ': 85, 'ㄲ': 86, 'ㄸ': 87,
  'ㅃ': 88, 'ㅉ': 89, 'ㅆ': 90, 'ㅢ': 91, 'ㅚ': 92, 'ㅐ': 93, 'ㅟ': 94, 'ㅔ': 95,
  'ㅒ': 96, 'ㅖ': 97, 'ㅘ': 98, 'ㅝ': 99, 'ㅙ': 100, 'ㅞ': 101, 'あ': 102, 'か': 103,
  'さ': 104, 'た': 105, 'な': 106, 'は': 107, 'ま': 108, 'や': 109, 'ら': 110, 'わ': 111,
  'い': 112, 'き': 113, 'し': 114, 'ち': 115, 'に': 116, 'ひ': 117, 'み': 118, 'り': 119,
  'う': 120, 'く': 121, 'す': 122, 'つ': 123, 'ぬ': 124, 'ふ': 125, 'む': 126, 'ゆ': 127,
  'る': 128, 'え': 129, 'け': 130, 'せ': 131, 'て': 132, 'ね': 133, 'へ': 134, 'め': 135,
  'れ': 136, 'お': 137, 'こ': 138, 'そ': 139, 'と': 140, 'の': 141, 'ほ': 142, 'も': 143,
  'よ': 144, 'ろ': 145, 'を': 146, 'ん': 147, 'ン': 148, 'ワ': 149, 'ラ': 150, 'ヤ': 151,
  'マ': 152, 'ハ': 153, 'ナ': 154, 'タ': 155, 'サ': 156, 'カ': 157, 'ア': 158, 'リ': 159,
  'ミ': 160, 'ヒ': 161, 'ニ': 162, 'チ': 163, 'シ': 164, 'キ': 165, 'イ': 166, 'ル': 167,
  'ユ': 168, 'ム': 169, 'フ': 170, 'ヌ': 171, 'ツ': 172, 'ス': 173, 'ク': 174, 'ウ': 175,
  'レ': 176, 'メ': 177, 'ヘ': 178, 'ネ': 179, 'テ': 180, 'セ': 181, 'ケ': 182, 'エ': 183,
  'ヲ': 184, 'ロ': 185, 'ヨ': 186, 'モ': 187, 'ホ': 188, 'ノ': 189, 'ト': 190, 'ソ': 191,
  'コ': 192, 'オ': 193, 'α': 194, 'β': 195, 'Γ': 196, 'Δ': 197, 'δ': 198, 'ε': 199,
  'ζ': 200, 'η': 201, 'θ': 202, 'ι': 203, 'Λ': 204, 'λ': 205, 'μ': 206, 'ξ': 207,
  'Π': 208, 'π': 209, 'Σ': 210, 'σ': 211, 'ς': 212, 'τ': 213, 'Φ': 214, 'φ': 215,
  'ψ': 216, 'Ω': 217, 'ω': 218, 'À': 219, 'Æ': 220, 'Ç': 221, 'È': 222, 'É': 223,
  'Ê': 224, 'Ë': 225, 'Ð': 226, 'Ñ': 227, 'Ö': 228, 'Ø': 229, 'Ù': 230, 'Ü': 231,
  'Ý': 232, 'Þ': 233, 'à': 234, 'ä': 235, 'æ': 236, 'ç': 237, 'è': 238, 'é': 239,
  'ë': 240, 'ð': 241, 'ñ': 242, 'ö': 243, 'ø': 244, 'ù': 245, 'ú': 246, 'û': 247,
  'ü': 248, 'ý': 249, 'þ': 250, 'ÿ': 251, 'ġ': 252, 'Ģ': 253, 'Ĥ': 254, 'Ħ': 255,
};