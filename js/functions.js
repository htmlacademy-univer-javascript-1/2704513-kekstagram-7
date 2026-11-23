// Функция проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Функция проверки палиндрома
function isPalindrome(str) {
  const cleanStr = str.replaceAll(' ', '').toLowerCase();
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}