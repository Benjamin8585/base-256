import {
  cleanBinary,
  decodeNumber,
  decodeNumbers,
  decodeString, decodeToBinary,
  encodeBinary,
  encodeNumber,
  encodeNumbers,
  encodeString,
} from "../index";
import { faker } from '@faker-js/faker';

const debugTests = false;

describe('index', () => {

  test('encode/decode binary should return same value', async () => {
    const binary = faker.random.numeric(50, { bannedDigits: ["2", "3", "4", "5", "6", "7", "8", "9"] });
    const encoded = encodeBinary(binary);
    const binaryDecoded = cleanBinary(decodeToBinary(encoded));
    if (debugTests) {
      console.log('Binary: ', binary);
      console.log('Encoded', encoded);
      console.log('Decoded', binaryDecoded);
    }
    expect(binary).toEqual(binaryDecoded);
  });

  test('encode/decode string should return same value', async () => {
    const str = faker.random.words(10);
    const encoded = encodeString(str);
    const decoded = decodeString(encoded);
    if (debugTests) {
      console.log('String: ', str);
      console.log('Encoded', encoded);
      console.log('Decoded', decoded);
    }
    expect(str).toEqual(decoded);
  });

  test('encode/decode number should return same value', async () => {
    const number = parseInt(faker.random.numeric(50));
    const encoded = encodeNumber(number);
    const decoded = decodeNumber(encoded);
    if (debugTests) {
      console.log('Number: ', number);
      console.log('Encoded number: ', encoded);
      console.log('Decoded number: ', decoded);
    }
    expect(number).toEqual(decoded);
  });

  test('encode/decode numbers should return same value', async () => {
    const numbers = [
      parseInt(faker.random.numeric(50)),
      parseInt(faker.random.numeric(40)),
      parseInt(faker.random.numeric(70)),
      parseInt(faker.random.numeric(30))
    ];
    const encodedNumbers = encodeNumbers(numbers);
    const decodedNumbers = decodeNumbers(encodedNumbers);
    if (debugTests) {
      console.log('Numbers: ', numbers);
      console.log('Encoded numbers: ', encodedNumbers);
      console.log('Decoded number: ', decodedNumbers);
    }
    expect(numbers).toEqual(decodedNumbers);
  });

  test('clean binary should remove useless zeros and support 0', async () => {
    const binaryNotCleanable = '100010010';
    const binary = '000000000010000';
    const cleanedBinary = '10000';
    const fullOfZero = '0000000000';
    const cleaned = cleanBinary(binary);
    if (debugTests) {
      console.log('Binary: ', binary);
      console.log('Clean version', cleanedBinary);
      console.log('Cleaned', cleaned);
    }
    expect(cleanedBinary).toEqual(cleaned);
    expect(cleanBinary(fullOfZero)).toEqual("0");
    expect(binaryNotCleanable).toEqual(cleanBinary(binaryNotCleanable));
  });
});