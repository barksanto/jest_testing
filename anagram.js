function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// helper function to format the 2 strings
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = isAnagram;