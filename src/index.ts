import { encodeTable, decodeTable } from './table';

/*
    input array of: Value from 0 to 255
    returns associated encoded character
 */
export function encodeTo256(value256: number[]): string {
  let encoded = '';
  for (let i = 0; i < value256.length; i++) {
    encoded += encodeTable[value256[i]];
  }
  return encoded;
}

/*
    input encoded characters
    returns array of values between 0 and 255
 */
export function decodeTo256(value: string): number[] {
  let array: number[] = [];
  for (let i = 0; i < value.length; i++) {
    array.push(decodeTable[value.charAt(i)]);
  }
  return array;
}

/*
  Transform binary string to array of values between 0 and 255
  Binary must be in chunks of 8bit (00000000) for strings
 */
function splitToByte(binary: string): number[] {
  let binaryWithZero = binary;
  while (binaryWithZero.length % 8 != 0) {
    binaryWithZero = '0' + binaryWithZero;
  }
  const arr: number[] = [];
  for (let index = 0; index < binaryWithZero.length; index += 8) {
    let value = binaryWithZero.slice(index, index + 8);
    arr.push(parseInt(value, 2));
  }
  return arr;
}

/*
  Encode binary to base256
 */
export function encodeBinary(binary: string): string {
  const bytes: number[] = splitToByte(binary);
  return encodeTo256(bytes);
}

/*
  Remove useless zero for binaries
 */
export function cleanBinary(binary: string): string {
  let cleaned = binary;
  while (cleaned.length > 1 && cleaned.charAt(0) === '0') {
    cleaned = cleaned.substring(1);
  }
  return cleaned;
}

/*
  Decode base256 to binary
 */
export function decodeToBinary(encoded: string): string {
  const array = decodeTo256(encoded);
  let binaryString = '';
  for (let i = 0; i < array.length; i++) {
    let value = array[i].toString(2);
    while (value.length < 8) {
      value = '0' + value;
    }
    binaryString += value;
  }
  return binaryString;
}

/*
  Encode full string to base256
 */
export function encodeString(value: string): string {
  const binary = value
    .split('')
    .map(function (char) {
      let bin = char.charCodeAt(0).toString(2);
      while (bin.length < 8) {
        bin = '0' + bin;
      }
      return bin;
    })
    .join('');
  return encodeBinary(binary);
}

/*
  Decode full string to base256
 */
export function decodeString(encoded: string): string {
  const binary = decodeToBinary(encoded);
  let chunks = [];
  for (let i = 0, charsLength = binary.length; i < charsLength; i += 8) {
    chunks.push(binary.substring(i, i + 8));
  }
  return chunks.map((bin) => String.fromCharCode(parseInt(bin, 2))).join('');
}

/*
  Encode number to base256
 */
export function encodeNumber(value: number): string {
  const binary = value.toString(2);
  return encodeBinary(binary);
}

/*
  Encode number to base256
 */
export function encodeNumbers(values: number[]): string {
  return values
    .map((value) => {
      return encodeNumber(value);
    })
    .join('|');
}

/*
  Decode base256 to number
 */
export function decodeNumber(encoded: string): number {
  const binary = decodeToBinary(encoded);
  return parseInt(binary, 2);
}

/*
  Decode base256 to number
 */
export function decodeNumbers(encoded: string): number[] {
  return encoded.split('|').map((encodedNumb) => {
    return decodeNumber(encodedNumb);
  });
}
