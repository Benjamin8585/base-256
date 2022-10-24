
import { encodeTable, decodeTable } from "./table";

/*
    Value from 0 to 255
 */
export function encodeTo256(value256: number[]): string {
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
  const reversed = [...binary].reverse().join("");
  const arr: number[] = [];
  for (let index = 0; index < reversed.length; index += 8) {
    let value = reversed.slice(index, index + 8);
    while (value.length < 8) {
      value += '0';
    }
    arr.push(parseInt([...value].reverse().join(""), 2));
  }
  return arr.reverse();
}

export function encodeBinary(binary: string): string {
  const bytes: number[] = splitToByte(binary);
  return encodeTo256(bytes);
}

export function decodeToBinary(encoded: string): string {
  const array = decodeTo256(encoded);
  let binaryString = '';
  for (let i = 0; i < array.length; i++) {
    binaryString += array[i].toString(2);
  }
  return binaryString;
}

export function encodeString(value: string): string {
  const binary = value.split('').map(function (char) { return char.charCodeAt(0).toString(2); }).join('');
  console.log('Binary: ', binary);
  return encodeBinary(binary);
}

export function decodeString(encoded: string): string {
  const binary = decodeToBinary(encoded);
  console.log('Binary decoded: ', binary);
  return binary.split('').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

console.log('String: ', '010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001');
const encoded = encodeBinary('010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001');
console.log('Encoded', encoded);
console.log('Decoded', decodeToBinary(encoded));

console.log('String: ', 'Hello world!');
console.log('010010000110010101101100011011000110111100100000011101110110111101110010011011000110010000100001')
const encodedStr = encodeString('Hello world!');
console.log('Encoded', encodedStr);
console.log('Decoded', decodeString(encodedStr));