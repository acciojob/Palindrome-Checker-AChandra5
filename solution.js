// complete the given function

function palindrome(str){
    let str2 = str.toLowerCase()
    console.log(str2)
    for(let i =0; i<str.length; i++){
      if(str2[i]!=str2[str.length-i-1]){
        return false
      }else{
        return true
      }
     }
}
module.exports = palindrome
