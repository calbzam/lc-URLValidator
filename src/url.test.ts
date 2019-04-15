import { VALIDATION_TYPE, validateURL } from './url';

describe('validateURL', () => {
  it('Should invalidate undefined input', () => {
    // Arrange
    const testURL = undefined;
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should return type URL', () => {
    // Arrange
    const testURL = undefined;
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.type).toEqual(VALIDATION_TYPE);
    expect(result.succeeded).toBeFalsy();
  });

  it('Should invalidate null input', () => {
    // Arrange
    const testURL = null;
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should invalidate a number input', () => {
    // Arrange
    const testURL = 123456789;
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should invalidate empty string', () => {
    // Arrange
    const testURL = '';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should invalidate a malformed URL', () => {
    // Arrange
    const testURL = 'mywebpage';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should invalidate an invalid URL without .', () => {
    // Arrange
    const testURL = 'wwwmywebpage';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('Should validate a valid URL', () => {
    // Arrange
    const testURL = 'www.google.com';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('Should validate a valid URL with upperCase', () => {
    // Arrange
    const testURL = 'WWW.GOOGLE.COM';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('Should validate a valid URL without www', () => {
    // Arrange
    const testURL = 'google.com';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('Should validate a valid URL with http', () => {
    // Arrange
    const testURL = 'http://www.google.com';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('Should validate a valid URL with https', () => {
    // Arrange
    const testURL = 'https://www.google.com';
    // Act
    const result = validateURL(testURL);
    // Assert
    expect(result.succeeded).toBeTruthy();
  });
});
