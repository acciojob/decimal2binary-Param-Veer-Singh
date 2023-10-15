function decimalToBinary(num) {
  //Write you code here
  let ans = "";
   while(num > 0){
      let rem = num % 2;
      ans = rem + ans;

      num = Math.floor(num/2);
   }
   return parseInt(ans);	
}

window.decimalToBinary = decimalToBinary;
