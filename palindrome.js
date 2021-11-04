let str = "arara";

function checkPalindrome(str) {
  str = str.toUpperCase();
  let str1 = str.split("").reverse().join("");

  if (str === str1) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

checkPalindrome(str);
