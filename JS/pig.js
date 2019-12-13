function Encrypt( ){
  var str= prompt("plain text")
  var pigged = "";
  var words = str.split(" ")
  for (i=0;i<words.length;i++) {
  pigged += words[i].slice(1)+ words[i][0] +"ay "
  }
  alert(pigged.trim())
}

function Decrypt( ){
  var str= prompt("cypher text")
  var pigged = "";
  var words = str.slice(" ")
  for (i=0;i<words.length;i++) {
  pigged += words[i].substring(0,-3)
  }
  alert(pigged.trim())
}
