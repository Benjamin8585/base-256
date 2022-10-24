
import { encodeTable, decodeTable } from "./table";

/*
    Value from 0 to 255
 */
export function encodeTo256(value256: number[]): string {
  console.log('Value 256 to encode:', value256);
  let encoded = '';
  for (let i = 0; i < value256.length; i++) {
    encoded += encodeTable[value256[i]];
  }
  return encoded;
}

/*
  Value to 255
 */
export function decodeTo256(value: string): number[] {
  let array: number[] = [];
  for (let i = 0; i < value.length; i++) {
    array.push(decodeTable[value.charAt(i)]);
  }
  return array;
}

function splitToByte(binary: string): number[] {
  let binaryWithZero = binary;
  while (binaryWithZero.length % 8 != 0) {
    binaryWithZero = "0" + binaryWithZero;
  }
  const arr: number[] = [];
  for (let index = 0; index < binaryWithZero.length; index += 8) {
    let value = binaryWithZero.slice(index, index + 8);
    arr.push(parseInt(value, 2));
  }
  return arr;
}

export function encodeBinary(binary: string): string {
  console.log('Binary encode length: ', binary.length);
  const bytes: number[] = splitToByte(binary);
  return encodeTo256(bytes);
}

export function decodeToBinary(encoded: string): string {
  const array = decodeTo256(encoded);
  console.log('Value 256 decoded:', array);
  console.log('Value 256 decoded length:', array.length);
  let binaryString = '';
  for (let i = 0; i < array.length; i++) {
    let value = array[i].toString(2);
    while (value.length < 8) {
      value = '0' + value;
    }
    binaryString += value;
  }
  console.log('Binary decoded length: ', binaryString.length);
  return binaryString;
}

export function encodeString(value: string): string {
  const binary = value.split('').map(function (char) { return char.charCodeAt(0).toString(2); }).join('');
  return encodeBinary(binary);
}

export function decodeString(encoded: string): string {
  const binary = decodeToBinary(encoded);
  let chunks = [];
  for (let i = 0, charsLength = binary.length; i < charsLength; i += 8) {
    chunks.push(binary.substring(i, i + 8));
  }
  console.log('Chunks: ', chunks);
  return chunks.map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// const binary = '010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001';
// console.log('Binary: ', binary);
// const encoded = encodeBinary(binary);
// console.log('Encoded', encoded);
// const binaryDecoded = decodeToBinary(encoded);
// console.log('Decoded', binaryDecoded);
// console.log('Debug: ', binary == binaryDecoded)

console.log('String: ', 'Helloworld!');
console.log('010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001')
const encodedStr = encodeString('Helloworld!');
console.log('Encoded', encodedStr);
console.log('Decoded', decodeString(encodedStr));