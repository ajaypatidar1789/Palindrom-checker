function reverseString(str){
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
    //return str.split("").reverse().join("");
}
function palindromeCheck(){
  let msg = document.getElementById("msg").value; 
  let ans = document.getElementById("answer");
  let ans1 = document.getElementById("answer1");
  if(msg=="")
  {
    alert("Please enter any string");
  }else{
  msg = msg.toLowerCase();
  if(msg == reverseString(msg)){
      ans.innerHTML = "It's Palindrome!";
  }else{
    ans.innerHTML = "It's not Palindrome!";
    ans1.innerHTML= "A string is called a palindrome string if the reverse of that string is the same as the original string"
    
  }
  }
}