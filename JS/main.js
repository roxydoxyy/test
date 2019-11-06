function TenFour(){
      for(let i=0 ; i<101 ; i+=1){
            if(i%4==0 && i%10==0)
            console.log("TenFour");
            
            else if (i%10==0)
                  console.log("Ten");
            else if (i%4==0)
                  console.log("Four");
            else{
                  
                  
            }
            
            
      }
      
}

function Years(year){
      let cenCount = 0;
      while (year > 0){
            year = year - 100;
            cenCount = cenCount + 1;
      }
      return cenCount;
}

function Triangles(){
      var x = prompt("Enter an angle belonging to a triangle(Just the number)");
      var y = prompt("Enter the other angle of that same triangle(Just the number)");
      alert(180 - x - y + " " + "degree us the 3rdangle of the triangle");
      
}

function books_length(books_input){
  return books_input.length;
}
console.log(books_length("hello"));

function password_check(userName, password){
if (userName.toLowercase(=="Hello" && password=="12345")){
  return("oh, okay I get it")
} 
  else{
  return("I'm still a bit iffy")
        
}

}
console.log(password_check("Hello","12345"));
