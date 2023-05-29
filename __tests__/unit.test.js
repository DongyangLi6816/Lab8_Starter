// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('1ab-afadfsf')).toBe(false);
});

test('phone number', () => {
    expect(functions.isPhoneNumber('12345678901')).toBe(false);
});

test('email', () => {
    expect(functions.isEmail('dol008@ucsd.edu')).toBe(true);
});

test('email', () => {
    expect(functions.isEmail('dongyangli@gmail.com')).toBe(true);
});

test('email', () => {
    expect(functions.isEmail('abcdefg')).toBe(false);
});

test('email', () => {
    expect(functions.isEmail('1234567890')).toBe(false);
});

test('password', () => {
    expect(functions.isStrongPassword('a12345')).toBe(true);
});

test('password', () => {
    expect(functions.isStrongPassword('asdfgh1')).toBe(true);
});

test('password', () => {
    expect(functions.isStrongPassword('1234567890')).toBe(false);
});

test('password', () => {
    expect(functions.isStrongPassword('a1')).toBe(false);
});

test('date', () => {
    expect(functions.isDate('01/01/2001')).toBe(true);
});

test('date', () => {
    expect(functions.isDate('1/1/2002')).toBe(true);
});

test('date', () => {
    expect(functions.isDate('123/1/2001')).toBe(false);
});

test('date', () => {
    expect(functions.isDate('12/123/1111')).toBe(false);
});

test('hex', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});

test('hex', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('hex', () => {
    expect(functions.isHexColor('#11111')).toBe(false);
});

test('hex', () => {
    expect(functions.isHexColor('abcdf')).toBe(false);
});